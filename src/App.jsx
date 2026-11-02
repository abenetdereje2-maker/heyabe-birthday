
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import IntroScreen from "./components/IntroScreen";
import { LanguageProvider } from "./context/LanguageContext";

import "./App.css";

function App() {
  const [showWebsite, setShowWebsite] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  // Listen for the Music orbit button
  useEffect(() => {
    const openMusic = () => {
      setShowMusic(true);
    };

    window.addEventListener("openBirthdayMusic", openMusic);

    return () => {
      window.removeEventListener("openBirthdayMusic", openMusic);
    };
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        {!showWebsite ? (
          <IntroScreen onOpen={() => setShowWebsite(true)} />
        ) : (
          <>
           

            <AnimatedRoutes />

          

            <MusicPlayer
              isVisible={showMusic}
              onClose={() => setShowMusic(false)}
            />

            {!showMusic && (
              <button
                className="music-toggle-btn"
                onClick={() => setShowMusic(true)}
                aria-label="Open music player"
              >
                🎵
                <span>Play Music</span>
              </button>
            )}
          </>
        )}
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
