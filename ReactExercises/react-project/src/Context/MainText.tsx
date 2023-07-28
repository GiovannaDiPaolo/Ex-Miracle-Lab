import React, { useContext } from 'react';
import { LanguageContext, Language } from './Components/LanguageContext';

const MainText: React.FC = () => {
  const language = useContext(LanguageContext);

  const getText = () => {
    return language === Language.English ? 'Hello' : 'Hola';
  };

  return <p>{getText()}</p>;
};

export default MainText;
