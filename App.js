import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, SafeAreaView, StatusBar, ScrollView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Config from './src/config';
import * as Routes from './src/Routes';
import { ThemeContext, LanguageContext } from './src/Contexts';
import Header from './src/Header';
import Navbar from './src/Navbar';
import './src/config/fontawesome';

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
      <SafeAreaView style={[styles.safeArea, {backgroundColor: Config.getColor(color, 7)}, {height: windowHeight}]}>
        <Header color={color} language={language} />
        <View style={[styles.mainView, {backgroundColor: Config.getColor(color, 1)}]}>
          <NavigationContainer ref={Routes.mainNavRef}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Profile"
                component={Routes.ProfileRoute}
                options={{
                  headerShown: false,
                }}
              />
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
                  headerShown: false,
                }} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        <Navbar color={color} language={language} />
      </SafeAreaView>
      <StatusBar backgroundColor={Config.getColor(color, 0)} barStyle='light-content' />
    </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    backgroundColor: Config.themes.blue[7],
    overflow: 'hidden',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  mainView: {
    flex: 8,
    // height: 800,
    width: '100%',
    backgroundColor: Config.themes.blue[1],
  },
});
