
import { useState } from "react";
import {
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const photos = [
  {
    image: "/images/heyabe1.jpg",
    title: "Beautiful Moments ❤️",
    description: "Every memory is special."
  },
  {
    image: "/images/heyabe2.jpg",
    title: "Unforgettable Memories",
    description: "Moments worth remembering."
  },
  {
    image: "/images/heyabe3.jpg",
    title: "Always Special 💕",
    description: "A collection of beautiful memories."
  }
];

function Memories() {
  const [selected, setSelected] = useState(null);

  const previousPhoto = () => {
    setSelected((current) =>
      (current - 1 + photos.length) % photos.length
    );
  };

  const nextPhoto = () => {
    setSelected((current) =>
      (current + 1) % photos.length
    );
  };

  return (
    <main className="memories-page">

      {/* Back to Home */}
      <Link to="/" className="memories-back">
        <ArrowLeft size={18} />
        <span>Back to Home</span>
      </Link>

      {/* Decorations */}
      <div className="memories-decoration memories-decoration-one">
        <Heart />
      </div>

      <div className="memories-decoration memories-decoration-two">
        <Sparkles />
      </div>

      {/* Header */}
      <header className="memories-header">
        <Heart
          className="memories-main-icon"
          size={38}
          fill="currentColor"
        />

        <p className="memories-subtitle">
          A LITTLE COLLECTION OF JOY
        </p>

        <h1>Our Beautiful Memories</h1>

        <p className="memories-description">
          Every picture tells a story.
          Here are some moments to celebrate.
        </p>

        <div className="memories-divider">
          <span></span>
          <Heart size={16} fill="currentColor" />
          <span></span>
        </div>
      </header>

      {/* Photo Gallery */}
      <section className="photo-gallery">
        {photos.map((photo, index) => (
          <article
            className="photo-card"
            key={photo.image}
            onClick={() => setSelected(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelected(index);
              }
            }}
          >
            <div className="photo-image-wrapper">
              <img
                src={photo.image}
                alt={photo.title}
              />

              <div className="photo-overlay">
                <span>View Memory</span>
              </div>
            </div>

            <div className="photo-info">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Footer */}
      <p className="memories-footer">
        Made with care by Abi
        <Heart size={14} fill="currentColor" />
      </p>

      {/* Fullscreen Photo Preview */}
      {selected !== null && (
        <div
          className="photo-modal"
          onClick={() => setSelected(null)}
        >
          <button
            className="close-modal"
            onClick={() => setSelected(null)}
            aria-label="Close photo"
          >
            <X />
          </button>

          <button
            className="gallery-arrow left"
            onClick={(e) => {
              e.stopPropagation();
              previousPhoto();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft />
          </button>

          <div
            className="modal-photo-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selected].image}
              alt={photos[selected].title}
            />

            <h3>{photos[selected].title}</h3>
            <p>{photos[selected].description}</p>
          </div>

          <button
            className="gallery-arrow right"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            aria-label="Next photo"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </main>
  );
}

export default Memories;
