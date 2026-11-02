
import { useState } from "react";
import {
  Heart,
  MailOpen,
  Sparkles,
  LockKeyhole,
  ArrowRight
} from "lucide-react";

const SECRET_PASSWORD = "ኣቢይወድሻል_ህያቤ";

function IntroScreen({ onOpen }) {
  const [opened, setOpened] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const openSurprise = () => {
    setOpened(true);
  };

  const checkPassword = (e) => {
    e.preventDefault();

    if (password.trim() === SECRET_PASSWORD) {
      setError("");

      setTimeout(() => {
        onOpen();
      }, 500);
    } else {
      setError("Oops! That's not the correct password. Try again ❤️");
      setPassword("");
    }
  };

  return (
    <div className="intro-screen">
      <div className="intro-content">

        <Sparkles className="intro-sparkle" size={35} />

        <p className="intro-subtitle">
          A SPECIAL SURPRISE FOR YOU
        </p>

        <h1>Heyabe ❤️</h1>

        {!opened ? (
          <>
            <p className="intro-description">
              Someone has prepared something special
              to celebrate your beautiful day.
            </p>

            <div className="envelope" onClick={openSurprise}>
              <div className="envelope-flap"></div>

              <div className="envelope-body">
                <Heart fill="currentColor" size={35} />
              </div>

              <div className="envelope-letter">
                <MailOpen size={35} />
                <span>A Special Message</span>
              </div>
            </div>

            <button
              className="open-surprise-btn"
              onClick={openSurprise}
            >
              Open Your Surprise
              <Heart size={17} fill="currentColor" />
            </button>
          </>
        ) : (
          <div className="password-box">
            <div className="password-icon">
              <LockKeyhole size={32} />
            </div>

            <h2>One Little Secret! 💕</h2>

            <p>
              Before entering your surprise,
              you need to unlock it with a secret password.
            </p>

            <form onSubmit={checkPassword}>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your secret password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  autoFocus
                  required
                />

                <button
                  type="button"
                  className="password-visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {error && (
                <p className="password-error">{error}</p>
              )}

              <button
                type="submit"
                className="unlock-btn"
              >
                Unlock My Surprise
                <ArrowRight size={18} />
              </button>
            </form>

            <button
              className="password-back"
              onClick={() => {
                setOpened(false);
                setPassword("");
                setError("");
              }}
            >
              Go Back
            </button>
          </div>
        )}

        <p className="intro-footer">
          Made with care by Abi ❤️
        </p>

      </div>
    </div>
  );
}

export default IntroScreen;
