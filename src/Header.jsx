import React, { useState } from 'react';
import { StyleSheet, Text, Modal, Dimensions, View, TouchableHighlight, Button } from 'react-native';
import * as Config from './config';
// import { Link, useLocation } from "react-router-dom";
// import './header.css';

const Header = (props) => {
    return (
        <View style={[styles.header, {backgroundColor: Config.getColor(props.color, 0)}]}>
            {/* {console.log(props)} */}
            {/* <Text style={[styles.text, {color: theme[props.color][7]}]}>This is a header blablabla</Text> */}
            
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
    text: {
        color: Config.themes.blue[7],
    }
});