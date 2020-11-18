import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Dimensions, StatusBar, ScrollView, Text, View, Button } from 'react-native';
import theme from '../../theme';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../Header';
import Content from '../Content';
import Navbar from '../Navbar';

import { ThemeContext } from '../../App';

const Home = (props, { navigation }) => {

    return (
    <ThemeContext.Consumer>
        {(values) => (
            <Fragment>
                <SafeAreaView style={[styles.container, {backgroundColor: theme[values.color][7]}, {height: values.height}]}>
                    <Header color={values.color} navigation={props.navigation}/>
                    <Text>Home</Text>
                    <Content color={values.color} />
                    <Navbar color={values.color} onChange={values.handleColor} />
                </SafeAreaView>
                <StatusBar backgroundColor={theme[values.color][0]} barStyle='light-content' />
            </Fragment>
        )}
    </ThemeContext.Consumer>
    );
};

export default Home;

const styles = StyleSheet.create({
    content: {
        flex: 8,
        backgroundColor: theme.blue[1],
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: theme.blue[7],
    },
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: theme.blue[7],
        alignItems: 'center',
        justifyContent: 'center',
      }
  });