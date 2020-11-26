import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, TouchableHighlight, Image } from 'react-native';

import * as Config from '../config';

const Settings = (props) => {

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    
    return (
        <View style={[Config.styles.screenView, {backgroundColor: Config.getColor(props.color, 1)}]}>
            <View style={[Config.styles.screenTitleContainer, {backgroundColor: Config.getColor(props.color, 0)}]}>
                <Text style={[Config.styles.screenTitleText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'settings', 'title')}</Text>
            </View>
            <View style={Config.styles.screenContentContainer}>
                <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                    <View style={Config.styles.sectionTitleContainer}>
                        <Text style={[Config.styles.sectionTitleText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'settings', 'login')}</Text>
                    </View>
                    <View style={Config.styles.sectionContentContainer}>
                        <TextInput
                            style={Config.styles.formField}
                            placeholder="Login"
                            onChangeText={text => setLogin(text)}
                            defaultValue={login}
                        />
                        <TextInput
                            style={Config.styles.formField}
                            placeholder="Password"
                            onChangeText={text => setPass(text)}
                            defaultValue={pass}
                        />
                        <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => alert(login)}>
                            <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'login', 'title').toUpperCase()}</Text>
                        </Pressable>
                    </View>
                </View>
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
            </View>
        </View>
    );
};

export { Settings };

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