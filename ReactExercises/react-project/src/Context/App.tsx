import React, { useState } from 'react';
import MainText from './MainText';
import Button from './Components/Button';
import { LanguageContext, Language } from './Components/LanguageContext';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.English);

  const toggleLanguage = () => {
    setLanguage(prevLanguage =>
      prevLanguage === Language.English ? Language.Spanish : Language.English
    );
  };

  return (
    <LanguageContext.Provider value={language}>
      <div>
        <MainText />
        <Button onClick={toggleLanguage} />
      </div>
    </LanguageContext.Provider>
  );
};


