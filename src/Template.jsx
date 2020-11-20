import React, { Fragment, useContext } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, ScrollView, Text, View, Button } from 'react-native';
import theme from './config/theme';

import Header from './Header';
import Navbar from './Navbar';

import { ThemeContext, LanguageContext } from '../App';

// import { useNavigation } from '@react-navigation/native';

const Template = (props) => {

    const contextTheme = useContext(ThemeContext);
    const contextLanguage = useContext(LanguageContext);

    return (
        <Fragment>
            <SafeAreaView style={[styles.container, {backgroundColor: theme[contextTheme.color][7]}, {height: contextTheme.height}]}>
                <Header color={contextTheme.color} />
                <View style={[styles.content, {backgroundColor: theme[contextTheme.color][1]}]}>
                    <ScrollView>
                        <props.screen color={contextTheme.color} handleColor={contextTheme.handleColor} language={contextLanguage.language} handleLanguage={contextLanguage.handleLanguage} />
                    </ScrollView>
                </View>
                <Navbar color={contextTheme.color} language={contextLanguage.language} />
            </SafeAreaView>
            <StatusBar backgroundColor={theme[contextTheme.color][0]} barStyle='light-content' />
        </Fragment>
    );
};

export default Template;

const styles = StyleSheet.create({
    content: {
        flex: 8,
        width: '100%',
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