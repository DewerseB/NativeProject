import React, { Fragment, useContext } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, ScrollView, Text, View, Button } from 'react-native';
import * as Config from './config';

import Header from './Header';
import Navbar from './Navbar';

import { ThemeContext, LanguageContext } from './Contexts';

const Template = (props) => {

    const contextTheme = useContext(ThemeContext);
    const contextLanguage = useContext(LanguageContext);

    return (
        <Fragment>
            <SafeAreaView style={[styles.safeArea, {backgroundColor: Config.getColor(contextTheme.color, 7)}, {height: contextTheme.height}]}>
                <Header color={contextTheme.color} />
                <View style={[styles.mainView, {backgroundColor: Config.getColor(contextTheme.color, 1)}]}>
                    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                        <props.screen color={contextTheme.color} handleColor={contextTheme.handleColor} language={contextLanguage.language} handleLanguage={contextLanguage.handleLanguage} />
                    </ScrollView>
                </View>
                <Navbar color={contextTheme.color} language={contextLanguage.language} />
            </SafeAreaView>
            <StatusBar backgroundColor={Config.getColor(contextTheme.color, 0)} barStyle='light-content' />
        </Fragment>
    );
};

export default Template;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        width: '100%',
        backgroundColor: Config.themes.blue[7],
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainView: {
        flex: 8,
        width: '100%',
        backgroundColor: Config.themes.blue[1],
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        width: '100%',
    },
    scrollViewContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
  });