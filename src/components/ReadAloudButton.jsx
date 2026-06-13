import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext.jsx";

export default function ReadAloudButton() {
  const [speechMode, setSpeechMode] = useState(false);
  const { lang } = useApp();

  useEffect(() => {
    if (!speechMode) return;

    const handleClick = (e) => {
      const text = e.target.innerText?.trim();

      // Ignore empty elements
      if (!text || text.length < 2) return;

      // Stop current speech
      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance(text);

      speech.lang = lang === "kn" ? "kn-IN" : "en-IN";
      speech.rate = 1;
      speech.pitch = 1;
      speech.volume = 1;

      window.speechSynthesis.speak(speech);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      window.speechSynthesis.cancel();
    };
  }, [speechMode]);

  const toggleSpeechMode = () => {
    setSpeechMode((prev) => !prev);

    if (speechMode) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <button
      className={`read-aloud-btn ${speechMode ? "active" : ""}`}
      onClick={toggleSpeechMode}
      aria-label="Toggle speech mode"
    >
      {speechMode ? "🔊 Speech ON" : "🔇 Speech OFF"}
    </button>
  );
}