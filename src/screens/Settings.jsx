import React, { Fragment } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';

import * as Config from '../config';

const SettingsTitle = (props) => {
    return (
        <Text style={[Config.styles.screenTitleText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'settings', 'title')}</Text>
    );
};

const Settings = (props) => {
    
    return (
        <Fragment>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                <View style={Config.styles.sectionTitleContainer}>
                    <Text style={[Config.styles.sectionTitleText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'settings', 'languages')}</Text>
                </View>
                <View style={Config.styles.sectionContentContainer}>
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
            </View>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                <View style={Config.styles.sectionTitleContainer}>
                    <Text style={[Config.styles.sectionTitleText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'settings', 'colors')}</Text>
                </View>
                <View style={Config.styles.sectionContentContainer}>
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
            </View>
        </Fragment>
    );
};

export { Settings, SettingsTitle };

const styles = StyleSheet.create({
    touchContainer: {
        // flex: 1,
        // maxHeight: 24,
        // margin: 18,
        // backgroundColor: 'red',
    },
    rampContainer: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 26,
        borderColor: 'black',
        borderWidth: 1,
        height: 43,
    },
});