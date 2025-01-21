import { createContext, useContext, useState } from "react";

const LangContext = createContext();
const LANGUAGES = ["en", "de", "ua"];

export const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = (lang) => {
    if (LANGUAGES.includes(lang)) {
        setLanguage(lang);
    } else {
        console.warn(`Language "${lang}" is not supported.`);
    }
};

  return (
    <LangContext.Provider value={{ language, switchLanguage, LANGUAGES }}>
    {children}
</LangContext.Provider>
  );
};

export const useLanguage = () => {
    const context = useContext(LangContext);
    if (!context) {
      throw new Error("useLanguage must be used within a LangProvider");
    }
    return context;
  };
