import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, Dimensions, View, TouchableHighlight, Button } from 'react-native';
import * as Config from './config';
import * as Routes from './Routes';
// import { Link, useLocation } from "react-router-dom";
// import './header.css';

const Header = (props) => {
    return (
        <View style={[styles.header, {backgroundColor: Config.getColor(props.color, 0)}]}>
            {/* <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => Routes.mainNavigate('Login', { name: 'Test' })}>
                <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'login', 'title').toUpperCase()}</Text>
            </Pressable> */}
            <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => Routes.mainNavigate('Settings', { name: 'Test' })}>
                <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'settings', 'title').toUpperCase()}</Text>
            </Pressable>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: Config.themes.blue[0],
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});