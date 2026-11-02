
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  Heart,
  Mail,
  Music,
  Images,
  Gift,
  Sparkles,
} from "lucide-react";

function Home() {
  const orbitSection = useRef(null);

  // Track scrolling through the homepage
  const { scrollYProgress } = useScroll({
    target: orbitSection,
    offset: ["start start", "end end"],
  });

  // Rotate the orbit through one full revolution
  const rotation = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 360]
  );

  // Keep icons and labels upright
  const reverseRotation = useTransform(
    rotation,
    (value) => -value
  );

  const orbitItems = [
    {
      title: "Birthday Letter",
      icon: Mail,
      className: "orbit-letter",
      path: "/letter",
      type: "link",
    },
    {
      title: "Birthday Music",
      icon: Music,
      className: "orbit-music",
      type: "music",
    },
    {
      title: "Memories",
      icon: Images,
      className: "orbit-memories",
      path: "/memories",
      type: "link",
    },
    {
      title: "Birthday Wishes",
      icon: Gift,
      className: "orbit-wishes",
      path: "/wishes",
      type: "link",
    },
  ];

  // Open the existing music player
  const openMusic = () => {
    window.dispatchEvent(
      new Event("openBirthdayMusic")
    );
  };

  return (
    <main className="orbit-home" ref={orbitSection}>
      <section className="orbit-stage">

        {/* Heading */}
        <div className="orbit-heading">
          <Sparkles size={22} />

          <p>A SPECIAL SURPRISE FOR YOU</p>

          <h1>Happy Birthday, Heyabe!</h1>

          <span>
            Scroll to explore your birthday universe
          </span>
        </div>

        {/* Orbit scene */}
        <div className="orbit-scene">

          {/* Decorative rings */}
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />

          {/* Rotating items */}
          <motion.div
            className="orbit-rotating"
            style={{
              rotate: rotation,
            }}
          >
            {orbitItems.map((item) => {
              const Icon = item.icon;

              const content = (
                <motion.div
                  className="orbit-counter-rotation"
                  style={{
                    rotate: reverseRotation,
                  }}
                >
                  <div className="orbit-icon">
                    <Icon size={26} />
                  </div>

                  <span>{item.title}</span>
                </motion.div>
              );

              return (
                <div
                  className={`orbit-item ${item.className}`}
                  key={item.title}
                >
                  {item.type === "music" ? (
                    <button
                      type="button"
                      className="orbit-action"
                      onClick={openMusic}
                      aria-label="Open birthday music"
                    >
                      {content}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="orbit-action"
                    >
                      {content}
                    </Link>
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* Stationary center photo */}
          <div className="orbit-center">
            <div className="orbit-photo-frame">
              <img
                src="/images/heyabe1.jpg"
                alt="Heyabe"
                className="orbit-photo"
              />
            </div>

            <div className="orbit-center-heart">
              <Heart
                size={19}
                fill="currentColor"
              />
            </div>
          </div>
        </div>

        {/* Scroll instruction */}
        <div className="orbit-scroll-hint">
          <span>↓</span>
          <p>Keep scrolling to rotate</p>
        </div>

      </section>
    </main>
  );
}

export default Home;
