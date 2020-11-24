import React, { Fragment, useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar, ScrollView, View } from 'react-native';
import * as Config from './config';

import { ThemeContext, LanguageContext } from './Contexts';

const Template = (props) => {

    const contextTheme = useContext(ThemeContext);
    const contextLanguage = useContext(LanguageContext);

    return (
        <Fragment>
            <props.screen color={contextTheme.color} handleColor={contextTheme.handleColor} language={contextLanguage.language} handleLanguage={contextLanguage.handleLanguage} />
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