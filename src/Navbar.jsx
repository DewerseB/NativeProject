import React from 'react';
import { StyleSheet, View, Button, Text, Pressable } from 'react-native';
import * as Config from './config';
import * as Routes from './Routes';

const Navbar = (props) => {

    return (
        <View style={[styles.navbar, {backgroundColor: Config.getColor(props.color, 0)}]}>
            {/* <View style={styles.button}>
                <Button
                    title={Config.getText(props.language, 'home', 'title')}
                    color={Config.getColor(props.color, 3)}
                    onPress={() =>
                        Routes.mainNavigate('Home', { name: 'Test' })
                    }
                />
            </View>
            <View style={styles.button}>
                <Button
                    title={Config.getText(props.language, 'about', 'title')}
                    color={Config.getColor(props.color, 3)}
                    onPress={() =>
                        Routes.mainNavigate('About', { name: 'Test' })
                    }
                />
            </View>
            <View style={styles.button}>
                <Button
                    title={Config.getText(props.language, 'settings', 'title')}
                    color={Config.getColor(props.color, 3)}
                    onPress={() =>
                        Routes.mainNavigate('Settings', { name: 'Test' })
                    }
                />
            </View> */}
            <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => Routes.mainNavigate('Home', { name: 'Test' })}>
                <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'home', 'title').toUpperCase()}</Text>
            </Pressable>
            <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => Routes.mainNavigate('About', { name: 'Test' })}>
                <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'about', 'title').toUpperCase()}</Text>
            </Pressable>
            {/* <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => Routes.mainNavigate('Settings', { name: 'Test' })}>
                <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'settings', 'title').toUpperCase()}</Text>
            </Pressable> */}
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
    },
    // button: {
    //     width: 100,
    //     backgroundColor: Config.themes.blue[3],
    // },
});