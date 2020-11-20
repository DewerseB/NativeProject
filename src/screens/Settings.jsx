import React, { Fragment } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Button } from 'react-native';
import theme from '../config/theme';
import * as Language from '../config/language';


const Settings = (props) => {
    
    return (
        <Fragment>
            <Text style={[styles.title, {color: theme[props.color][7]}]}>{Language.getText(props.language, 'settings', 'title')}</Text>
            <View style={[styles.section, {backgroundColor: theme[props.color][2]}]}>
                <Text style={[styles.text, {color: theme[props.color][7]}]}>{Language.getText(props.language, 'settings', 'languages')}</Text>
                {Object.keys(Language.languages).map((language) => {
                    return (
                        <View key={language} style={styles.touchContainer}>
                            <TouchableHighlight onPress={() => props.handleLanguage(language)}>
                                <View style={styles.rampContainer}>
                                <Image
                                    style={[{width: 64}, {height: 32}]}
                                    source={Language.getText(language, 'general', 'flag')}
                                />
                                </View>
                            </TouchableHighlight>
                        </View>
                    )
                })}
            </View>
            <View style={[styles.section, {backgroundColor: theme[props.color][2]}]}>
                <Text style={[styles.text, {color: theme[props.color][7]}]}>{Language.getText(props.language, 'settings', 'colors')}</Text>
                {Object.keys(theme).map((color) => {
                    return (
                        <View key={color} style={styles.touchContainer}>
                            <TouchableHighlight onPress={() => props.handleColor(color)}>
                                <View style={styles.rampContainer}>
                                {Object.values(theme[color]).map((shade) => {
                                    return (
                                        <View key={shade} style={[{backgroundColor: shade}, {width: 24}, {height: 24}]}/>
                                    )
                                })}
                                </View>
                            </TouchableHighlight>
                        </View>
                    )
                })}
            </View>
        </Fragment>
    );
};

export { Settings };

const styles = StyleSheet.create({
    title: {
        // flex: 1,
        padding: 18,
        fontSize: 24,
        color: theme.blue[7],
        alignSelf: 'center',
    },
    section: {
        flex: 4,
        margin: 18,
        padding: 18,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchContainer: {
        flex: 1,
        // width: '100%',
        margin: 18,
    },
    rampContainer: {
        flex: 1,
        flexDirection: 'row',
        // width: 'fit-content',
        borderColor: 'black',
        borderWidth: 1,
    },
    text: {
        padding: 18,
        fontSize: 18,
        color: theme.blue[7],
        alignSelf: 'center',
    }
  });