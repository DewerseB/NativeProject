import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Link, useLocation } from "react-router-dom";
// import './header.css';

const Header = () => {
    
    return (
        <View style={styles.header}>
            <Text>This is a header blablabla</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });