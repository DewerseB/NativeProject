import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import theme from '../../theme';

const Settings = ({ navigation }) => {
    return (
        // <View style={[styles.content, {backgroundColor: theme[props.color][1]}]}>
        //     {Object.keys(theme).map((color) => {
        //         return (
        //             <Button key={color} color={color} title={color} onPress={() => handleColor(color)} />
        //         )
        //     })}
        // </View>
        <Text>Trop cool</Text>
    );
};

export default Settings;

const styles = StyleSheet.create({
    content: {
        flex: 8,
        backgroundColor: theme.blue[1],
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: theme.blue[7],
    }
  });