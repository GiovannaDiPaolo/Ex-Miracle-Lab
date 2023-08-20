import  { useState, createContext } from 'react';
import MainText from './Components/MainText';
import Button from './Components/Button';
import './App.css';

type Language = 'es' | 'en';

interface ContextProps {
  language: Language;
  toggleLanguage: () => void;
}
export const LanguageContext = createContext<ContextProps>({
  language: 'es',
  toggleLanguage: () => {},
});

function ContextApp() {
  const [language, setLanguage] = useState<Language>('es');

  function toggleLanguage() {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div>
        <h1>Click on the button</h1>
        <h2>to change the language of the labels below</h2>
        <div className='containerApp'>
          <MainText />
          <Button onClick={() => console.log('Button clicked')} />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default ContextApp;
