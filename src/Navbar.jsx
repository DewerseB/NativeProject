import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import * as Config from './config';
import * as Routes from './Routes';

const Navbar = (props) => {

    return (
        <View style={[styles.navbar, {backgroundColor: Config.getColor(props.color, 0)}]}>
            <View style={styles.button}>
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
    },
    button: {
        width: 100,
    },
    text: {
        color: Config.themes.blue[7],
    }
});