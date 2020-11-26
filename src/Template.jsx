import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import * as Config from './config';

import { ThemeContext, LanguageContext } from './Contexts';

const Template = (props) => {

    const contextTheme = useContext(ThemeContext);
    const contextLanguage = useContext(LanguageContext);

    return (
        <ScrollView style={[styles.scrollView, {backgroundColor: Config.themes[contextTheme.color][1]}]} contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
            {/* <View style={[Config.styles.screenView, {backgroundColor: Config.getColor(contextTheme.color, 1)}]}> */}
                <props.screen color={contextTheme.color} handleColor={contextTheme.handleColor} language={contextLanguage.language} handleLanguage={contextLanguage.handleLanguage} />
            {/* </View> */}
        </ScrollView>
    );
};

export default Template;

const styles = StyleSheet.create({
    scrollView: {
        // flex: 1,
        // height: 600,
        backgroundColor: Config.themes.blue[1],
    },
    scrollViewContent: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // minHeight: '100%',
    },
  });