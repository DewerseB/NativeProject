import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from './config/theme';
import * as Language from './config/language';

const Navbar = (props) => {

    const navigation = useNavigation();

    function handleColor(color) {
        props.onChange(color);
    }

    return (
        <View style={[styles.navbar, {backgroundColor: theme[props.color][0]}]}>
            <Button
                title={Language.getText(props.language, 'home', 'title')}
                color={theme[props.color][3]}
                onPress={() =>
                    navigation.navigate('Home', { name: 'Test' })
                }
            />
            <Button
                title={Language.getText(props.language, 'about', 'title')}
                color={theme[props.color][3]}
                onPress={() =>
                    navigation.navigate('About', { name: 'Test' })
                }
            />
            <Button
                title={Language.getText(props.language, 'settings', 'title')}
                color={theme[props.color][3]}
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
        backgroundColor: theme.blue[0],
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    text: {
        color: theme.blue[7],
    }
});