import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, Dimensions, View, TouchableHighlight, Button } from 'react-native';
import * as Config from './config';
import * as Routes from './Routes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { Link, useLocation } from "react-router-dom";
// import './header.css';

const Header = (props) => {
    return (
        <View style={[styles.header, {backgroundColor: Config.getColor(props.color, 0)}]}>
            <View style={styles.headerContent}>
                {/* <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => Routes.mainNavigate('Login', { name: 'Test' })}>
                    <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'login', 'title').toUpperCase()}</Text>
                </Pressable> */}
                <Pressable style={[Config.styles.buttonFA, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => Routes.mainNavigate('Settings', { name: 'Test' })}>
                    <FontAwesomeIcon style={[Config.styles.iconFA, {color: Config.getColor(props.color, 7)}]} icon="cog" size={24} />
                </Pressable>
            </View>
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
        justifyContent: 'center',
        overflow: 'hidden',
    },
    headerContent: {
        flex: 1,
        flexDirection: 'row',
        minWidth: 300,
        maxWidth: 864,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: 'red',
        marginHorizontal: 18,
    }
});