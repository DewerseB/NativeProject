import 'react-native-gesture-handler';
import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Dimensions, Platform, StatusBar } from 'react-native';
import Header from './src/Header';
import Content from './src/Content';
import Navbar from './src/Navbar';
import theme from './theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Settings from './src/screens/Settings';

import * as Routes from './src/Routes';

const Stack = createStackNavigator();
export const ThemeContext = React.createContext('blue');

export default function App() {

  const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const onResize = () => {
        setWindowHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', onResize);
  });


  const [color, setColor] = useState('blue');

  function handleColor(newColor) {
    setColor(newColor);
  }


  return (
    <ThemeContext.Provider value={{color: color, handleColor: handleColor, height: windowHeight}}>
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
      // <Fragment>
      //   <SafeAreaView style={[styles.container, {backgroundColor: theme[color][7]}, {height: windowHeight}]}>
      //     <Header color={color} />
      //     <Content color={color} />
      //     <Navbar color={color} onChange={handleColor} />
      //   </SafeAreaView>
      //   <StatusBar backgroundColor={theme[color][0]} barStyle='light-content' />
      // </Fragment>
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
