import React, { Fragment, useContext } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, ScrollView, Text, View, Button } from 'react-native';
import theme from '../../theme';

import Header from '../Header';
import Content from '../Content';
import Navbar from '../Navbar';

import { ThemeContext } from '../../App';

const Home = (props, { navigation }) => {

    const context = useContext(ThemeContext);

    return (
        <Fragment>
            <SafeAreaView style={[styles.container, {backgroundColor: theme[context.color][7]}, {height: context.height}]}>
                <Header color={context.color} />
                <Content color={context.color} />
                <Navbar color={context.color} navigation={props.navigation} />
            </SafeAreaView>
            <StatusBar backgroundColor={theme[context.color][0]} barStyle='light-content' />
        </Fragment>
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
        width: '100%',
        backgroundColor: theme.blue[7],
        alignItems: 'center',
        justifyContent: 'center',
      }
  });