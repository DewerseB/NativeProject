import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import theme from './src/config/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Routes from './src/Routes';


export const ThemeContext = React.createContext({height: Dimensions.get('window').height, color: 'blue'});
export const LanguageContext = React.createContext({language: 'english'});

export default function App() {

  const Stack = createStackNavigator();

  const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const onResize = () => {
        setWindowHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', onResize);
  });

  const [language, setLanguage] = useState('english');
  
  function handleLanguage(newLanguage) {
    setLanguage(newLanguage);
  };

  const [color, setColor] = useState('blue');

  function handleColor(newColor) {
    setColor(newColor);
  };

  return (
    <LanguageContext.Provider value={{language: language, handleLanguage: handleLanguage}}>
    <ThemeContext.Provider value={{height: windowHeight, color: color, handleColor: handleColor}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Routes.HomeRoute}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="About"
            component={Routes.AboutRoute}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Settings" 
            component={Routes.SettingsRoute}
            options={{
              headerShown: false
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.blue[7],
    alignItems: 'center',
    justifyContent: 'center',
  }
});
