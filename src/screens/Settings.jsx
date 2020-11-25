import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, TouchableHighlight, Image } from 'react-native';

import * as Config from '../config';

const Settings = (props) => {

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    
    return (
        <View style={[Config.styles.screenView, {backgroundColor: Config.getColor(props.color, 1)}]}>
            <Text style={[Config.styles.screenTitle, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'settings', 'title')}</Text>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                <Text style={[Config.styles.sectionText, {color: Config.getColor(props.color, 7)}]}>Login</Text>
                <TextInput
                    style={Config.styles.formField}
                    placeholder="Login"
                    onChangeText={text => setLogin(text)}
                    defaultValue={login}
                />
                <Text style={[Config.styles.sectionText, {color: Config.getColor(props.color, 7)}]}>Password</Text>
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
        </View>
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