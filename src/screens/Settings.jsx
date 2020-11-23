import React, { Fragment } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

import * as Config from '../config';

const Settings = (props) => {
    
    return (
        <Fragment>
            <Text style={[Config.styles.screenTitle, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'settings', 'title')}</Text>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                <Text style={[Config.styles.sectionText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'settings', 'languages')}</Text>
                {Object.keys(Config.languages).map((language) => {
                    return (
                        <View key={language} style={styles.touchContainer}>
                            <TouchableHighlight onPress={() => props.handleLanguage(language)}>
                                <View>
                                <Image
                                    style={[{width: 64}, {height: 43}]}
                                    source={Config.getText(language, 'general', 'flag')}
                                />
                                </View>
                            </TouchableHighlight>
                        </View>
                    )
                })}
            </View>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                <Text style={[Config.styles.sectionText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'settings', 'colors')}</Text>
                {Object.keys(Config.themes).map((color) => {
                    return (
                        <View key={color} style={styles.touchContainer}>
                            <TouchableHighlight onPress={() => props.handleColor(color)}>
                                <View style={styles.rampContainer}>
                                {Object.values(Config.themes[color]).map((shade) => {
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
    touchContainer: {
        flex: 1,
        margin: 18,
    },
    rampContainer: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
    },
});