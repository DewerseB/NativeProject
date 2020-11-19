import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform } from 'react-native';
import theme from '../theme';

const Navbar = (props, {navigation}) => {

    function handleColor(color) {
        props.onChange(color);
    }

    return (
        <View style={[styles.navbar, {backgroundColor: theme[props.color][0]}]}>
            {/* {Object.keys(theme).map((color) => {
                return (
                    <Button key={color} color={color} title={color} onPress={() => handleColor(color)} />
                )
            })} */}
            <Button
            title="Home"
            color={theme[props.color][3]}
            onPress={() =>
                props.navigation.navigate('Home', { name: 'Jane' })
            }
            />
            <Button
            title="Settings"
            color={theme[props.color][3]}
            onPress={() =>
                props.navigation.navigate('Settings', { name: 'Jane' })
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