import React from 'react';

export enum Language {
  English = 'english',
  Spanish = 'spanish',
}

export const LanguageContext = React.createContext<Language>(Language.English);
