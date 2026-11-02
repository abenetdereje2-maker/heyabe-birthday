
import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Music,
  X,
  ListMusic,
  Heart,
} from "lucide-react";

const songs = [
  {
    title: "የነገን ማወቅ ፈለኩጝ",
    artist: "Birthday Playlist",
    src: "/music/song1.mp3",
  },
  {
    title: "መልሼ ልውደድሽ መልሼ",
    artist: "Birthday Playlist",
    src: "/music/song2.mp3",
  },
  {
    title: "ያውነጝ ",
    artist: "Birthday Playlist",
    src: "/music/song3.mp3",
  },
  {
    title: "ገዳም የፍቅር ገዳም",
    artist: "Birthday Playlist",
    src: "/music/song4.mp3",
  },
];

function MusicPlayer({ isVisible, onClose }) {
  const audioRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const song = songs[currentSong];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSong]);

  const playPause = () => {
    setIsPlaying((previous) => !previous);
  };

  const changeSong = (index) => {
    setCurrentSong(index);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(true);
  };

  const nextSong = () => {
    changeSong((currentSong + 1) % songs.length);
  };

  const previousSong = () => {
    if (currentTime > 3 && audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
    } else {
      changeSong((currentSong - 1 + songs.length) % songs.length);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (event) => {
    const time = Number(event.target.value);

    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time) => {
    if (!Number.isFinite(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const closePlayer = () => {
    setIsPlaying(false);
    setShowPlaylist(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="music-player music-player-redesigned">
      <audio
        ref={audioRef}
        src={song.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={nextSong}
        onError={() => {
          console.error("Could not load audio:", song.src);
          setIsPlaying(false);
        }}
      />

      <div className="music-player-top">
        <div className="music-heading">
          <div className="music-icon">
            <Music size={21} />
          </div>

          <div>
            <h3>Birthday Music</h3>
            <p>Your special playlist ❤️</p>
          </div>
        </div>

        <button
          className="music-close-btn"
          onClick={closePlayer}
          aria-label="Close music player"
        >
          <X size={21} />
        </button>
      </div>

      <div className="music-player-content">
        <div className="music-intro">
          <div className="music-intro-icon">
            <Heart size={25} fill="currentColor" />
          </div>

          <div>
            <h3>A Special Playlist</h3>
            <p>A collection of songs for your special day.</p>
            <span>Made with care by Abi ❤️</span>
          </div>
        </div>

        <div className="music-track">
          <div className="music-cover">
            <Music size={48} />
          </div>

          <h4>{song.title}</h4>
          <p>{song.artist}</p>
        </div>
      </div>

      <div className="music-progress">
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={Math.min(currentTime, duration || 0)}
          onChange={handleSeek}
          className="progress-slider"
          aria-label="Song progress"
        />

        <div className="time-labels">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="music-controls">
        <button onClick={previousSong} aria-label="Previous song">
          <SkipBack size={22} />
        </button>

        <button
          className="play-button"
          onClick={playPause}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <button onClick={nextSong} aria-label="Next song">
          <SkipForward size={22} />
        </button>
      </div>

      <div className="music-volume">
        <Volume2 size={19} />

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          aria-label="Volume"
        />
      </div>

      <button
        className="playlist-toggle"
        onClick={() => setShowPlaylist((previous) => !previous)}
      >
        <ListMusic size={19} />
        {showPlaylist ? "Hide Playlist" : "Show Playlist"}
      </button>

      {showPlaylist && (
        <div className="music-playlist">
          {songs.map((item, index) => (
            <button
              key={item.src}
              className={`playlist-item ${
                currentSong === index ? "active-song" : ""
              }`}
              onClick={() => changeSong(index)}
            >
              <span>
                {index + 1}. {item.title}
              </span>

              {currentSong === index && isPlaying && (
                <span className="playing-indicator">♫</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;
