import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform } from 'react-native';
import theme from '../theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Navbar = (props, {navigation}) => {

    function handleColor(color) {
        props.onChange(color);
    }

    return (
        <View style={[styles.navbar, {backgroundColor: theme[props.color][0]}]}>
            {/* {console.log(props)} */}
            {Object.keys(theme).map((color) => {
                return (
                    <Button key={color} color={color} title={color} onPress={() => handleColor(color)} />
                )
            })}
            {/* <Button
                title="Home"
                onPress={() =>
                    navigation.navigate('Home', { name: 'Jane' })
                }
            />
            <Button
                title="Settings"
                onPress={() =>
                    navigation.navigate('Settings', { name: 'Jane' })
                }
            /> */}
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