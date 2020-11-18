import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';
// import { Link, useLocation } from "react-router-dom";
// import './header.css';

const Header = () => {
    
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const onChange = (result) => {
            setWindowWidth(Dimensions.get('window').width);
            setWindowHeight(Dimensions.get('window').height);
        };
    
        Dimensions.addEventListener('change', onChange);
      });


    return (
        <View style={styles.header}>
            {/* <Text>This is a header blablabla</Text> */}
            <Text>Height: {windowHeight}</Text>
            <Text>Width: {windowWidth}</Text>
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