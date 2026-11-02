
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    home: "Home",
    letter: "Birthday Letter",
    memories: "Our Memories",
    wishes: "Birthday Wishes",
    greeting: "Happy Birthday, Heyabe!",
    subtitle: "Today is a special day because you are special.",
    openLetter: "Read Birthday Letter",
    viewMemories: "View Memories",
    madeBy: "Made with care by Abi for Heyabe",
  },

  am: {
    home: "መነሻ",
    letter: "የልደት ደብዳቤ",
    memories: "ትዝታዎቻችን",
    wishes: "የልደት ምኞቶች",
    greeting: "መልካም ልደት ሄያቤ!",
    subtitle: "ዛሬ ልዩ ቀን ነው፤ ምክንያቱም አንቺ ልዩ ነሽ።",
    openLetter: "የልደት ደብዳቤውን አንብቢ",
    viewMemories: "ትዝታዎቻችንን ተመልከቺ",
    madeBy: "በአቢ ለሄያቤ በፍቅር የተዘጋጀ",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((current) => current === "en" ? "am" : "en");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
