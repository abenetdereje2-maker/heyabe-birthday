
import { useState } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

import {
  Gift,
  Heart,
  Sparkles,
  ArrowLeft,
  Star,
} from "lucide-react";

function Wishes() {
  const [showMessage, setShowMessage] = useState(false);

  const celebrate = () => {
    setShowMessage(true);

    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ec4899", "#c084fc", "#ffffff", "#fbb6ce"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.5 },
        colors: ["#ec4899", "#c084fc", "#fbb6ce"],
      });
    }, 500);
  };

  const wishes = [
    {
      icon: Heart,
      title: "Happiness",
      description: "May your days be full of joy and smiles.",
      className: "happiness",
    },
    {
      icon: Sparkles,
      title: "Success",
      description: "May you achieve everything you work for.",
      className: "success",
    },
    {
      icon: Gift,
      title: "Beautiful Moments",
      description: "May this year bring unforgettable memories.",
      className: "moments",
    },
  ];

  return (
    <main className="wishes-page">
      <div className="wishes-decoration wishes-decoration-one">
        <Heart fill="currentColor" />
      </div>

      <div className="wishes-decoration wishes-decoration-two">
        <Sparkles />
      </div>

      <section className="wishes-container">

        <Link to="/" className="wishes-back">
          <ArrowLeft size={17} />
          Back to Home
        </Link>

        <div className="wishes-header">
          <div className="wishes-main-icon">
            <Gift size={32} />
          </div>

          <div className="wishes-subtitle">
            <Sparkles size={17} />
            <span>A SPECIAL CELEBRATION</span>
            <Sparkles size={17} />
          </div>

          <h1>
            Happy Birthday,
            <span> Heyabe!</span>
            <span className="birthday-emoji"> 🎂</span>
          </h1>

          <p className="wishes-description">
            May your life be filled with happiness,
            your dreams become reality, and every new
            day bring you wonderful opportunities.
          </p>
        </div>

        {/* Birthday wish cards */}
        <div className="wish-cards">
          {wishes.map((wish) => {
            const Icon = wish.icon;

            return (
              <article
                className={`wish-card ${wish.className}`}
                key={wish.title}
              >
                <div className="wish-card-icon">
                  <Icon size={28} />
                </div>

                <h3>{wish.title}</h3>

                <p>{wish.description}</p>
              </article>
            );
          })}
        </div>

        {/* Celebration button */}
        <button
          type="button"
          className="celebrate-btn"
          onClick={celebrate}
        >
          <Gift size={20} />
          Celebrate Your Birthday
          <Sparkles size={20} />
        </button>

        {/* Surprise message */}
        {showMessage && (
          <div className="surprise-message">
            <div className="surprise-icon">
              <Heart size={30} fill="currentColor" />
            </div>

            <h2>Surprise, Heyabe!</h2>

            <p>
              You deserve all the beautiful things
              life has to offer. Keep shining!
            </p>

            <h3>With warm wishes, Abi ❤️</h3>

            <div className="surprise-stars">
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
            </div>
          </div>
        )}

        <div className="wishes-footer">
          Made with care <Heart size={15} fill="currentColor" />
        </div>

      </section>
    </main>
  );
}

export default Wishes;
