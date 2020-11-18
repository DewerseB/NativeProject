import 'react-native-gesture-handler';
import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Dimensions, Button, Text, View, Platform, StatusBar } from 'react-native';
import Header from './src/Header';
import Content from './src/Content';
import Navbar from './src/Navbar';
import theme from './theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Settings from './src/screens/Settings';

const Stack = createStackNavigator();
export const ThemeContext = React.createContext('blue');

export default function App() {

  // const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

  const [color, setColor] = useState('blue');

  function handleColor(newColor) {
    setColor(newColor);
  }

  useEffect(() => {
      const onResize = () => {
          // setWindowWidth(Dimensions.get('window').width);
          setWindowHeight(Dimensions.get('window').height);
      };

      Dimensions.addEventListener('change', onResize);
    });


  return (
    // <ThemeContext.Provider value={color}>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         name="Home"
    //         component={Home}
    //         // options={{
    //         //   headerShown: false,
    //         // }}
    //       />
    //       <Stack.Screen 
    //         name="Settings" 
    //         component={Settings}
    //         options={{
    //           headerShown: false
    //         }} />
    //     </Stack.Navigator>
      <Fragment>
        <SafeAreaView style={[styles.container, {backgroundColor: theme[color][7]}, {height: windowHeight}]}>
          <Header color={color} onChange={handleColor} />
          <Content color={color} onChange={handleColor} />
          <Navbar color={color} onChange={handleColor} />
        </SafeAreaView>
        <StatusBar backgroundColor={theme[color][0]} barStyle='light-content' />
      </Fragment>
    //   </NavigationContainer>
    // </ThemeContext.Provider>
  );
}

// #031721	#0B2E3F	#1F4B60	#3B6A82	#5D8BA3	#89AFC1	#B8D1DD	#F2F7F9

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.blue[7],
    alignItems: 'center',
    justifyContent: 'center',
  }
});
