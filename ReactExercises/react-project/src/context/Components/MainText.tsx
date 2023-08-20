import  { useContext } from 'react';
import { LanguageContext } from '../ContextApp';

function MainText() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <p>{language === 'es' ? 'Hola mundo!' : 'Hello world!'}</p>
      <p>
        {language === 'es'
          ? 'Bienvenido a mi aplicación!'
          : 'Welcome to my app!'}
      </p>
    </>
  );
}
export default MainText;