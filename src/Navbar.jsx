import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Link, useLocation } from "react-router-dom";
// import './header.css';

const Navbar = () => {
    
    return (
        <View style={styles.navbar}>
            <Text>This is a navbar</Text>
        </View>
    )
}

export default Navbar;

const styles = StyleSheet.create({
    navbar: {
        flex: 1,
        width: '100%',
        backgroundColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });