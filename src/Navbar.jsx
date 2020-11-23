import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Config from './config';

const Navbar = (props) => {

    const navigation = useNavigation();

    function handleColor(color) {
        props.onChange(color);
    }

    return (
        <View style={[styles.navbar, {backgroundColor: Config.getColor(props.color, 0)}]}>
            <Button
                title={Config.getText(props.language, 'home', 'title')}
                color={Config.getColor(props.color, 3)}
                onPress={() =>
                    navigation.navigate('Home', { name: 'Test' })
                }
            />
            <Button
                title={Config.getText(props.language, 'about', 'title')}
                color={Config.getColor(props.color, 3)}
                onPress={() =>
                    navigation.navigate('About', { name: 'Test' })
                }
            />
            <Button
                title={Config.getText(props.language, 'settings', 'title')}
                color={Config.getColor(props.color, 3)}
                onPress={() =>
                    navigation.navigate('Settings', { name: 'Test' })
                }
            />
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
    text: {
        color: Config.themes.blue[7],
    }
});