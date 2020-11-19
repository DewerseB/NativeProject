import React, { Fragment, useContext } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
import theme from '../../theme';

import { ThemeContext } from '../../App';

const Settings = () => {
    
    const context = useContext(ThemeContext);
    
    return (
        <Fragment>
            <Text style={[styles.title, {color: theme[context.color][7]}]}>Settings</Text>
            <View style={[styles.section, {backgroundColor: theme[context.color][2]}]}>
                <Text style={[styles.text, {color: theme[context.color][7]}]}>Click on a color ramp below to change the theme of the app.</Text>
                {Object.keys(theme).map((color) => {
                    return (
                        <View style={styles.touchContainer}>
                            <TouchableHighlight onPress={() => context.handleColor(color)}>
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

export default Settings;

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