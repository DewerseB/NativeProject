import React from 'react';
import { StyleSheet, Text, Dimensions, View, Button } from 'react-native';
import theme from '../theme';
// import { Link, useLocation } from "react-router-dom";
// import './header.css';

const Header = (props) => {
    
    return (
        <View style={[styles.header, {backgroundColor: theme[props.color][0]}]}>
            {/* {console.log(props)} */}
            {/* <Text style={[styles.text, {color: theme[props.color][7]}]}>This is a header blablabla</Text> */}
            <Button
            title="Home"
            onPress={() =>
                props.navigation.navigate('Home', { name: 'Jane' })
            }
            />
            <Button
            title="Settings"
            onPress={() =>
                props.navigation.navigate('Settings', { name: 'Jane' })
            }
            />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: theme.blue[0],
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: theme.blue[7],
    }
});