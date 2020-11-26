import React from 'react';
import { StyleSheet, View, Button, Text, Pressable } from 'react-native';
import * as Config from './config';
import * as Routes from './Routes';

const Navbar = (props) => {

    return (
        <View style={[styles.navbar, {backgroundColor: Config.getColor(props.color, 0)}]}>
            <View style={styles.navbarContent}>
                <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => Routes.mainNavigate('Home', { name: 'Test' })}>
                    <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'home', 'title').toUpperCase()}</Text>
                </Pressable>
                <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => Routes.mainNavigate('Login', { name: 'Test' })}>
                    <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'login', 'title').toUpperCase()}</Text>
                </Pressable>
                <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => Routes.mainNavigate('About', { name: 'Test' })}>
                    <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'about', 'title').toUpperCase()}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Navbar;

const styles = StyleSheet.create({
    navbar: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: Config.themes.blue[0],
        alignItems: 'center',
        justifyContent: 'space-evenly',
        overflow: 'hidden',
    },
    navbarContent: {
        flex: 1,
        flexDirection: 'row',
        minWidth: 300,
        maxWidth: 864,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 18,
    },
});