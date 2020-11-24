import React from 'react';
import { Dimensions } from 'react-native';

export const ThemeContext = React.createContext({height: Dimensions.get('window').height, color: 'blue'});
export const LanguageContext = React.createContext({language: 'english'});