import React, { Fragment, useContext } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, ScrollView, Text, View, Button } from 'react-native';
import theme from '../../theme';

import Header from '../Header';
import Content from '../Content';
import Navbar from '../Navbar';

import { ThemeContext } from '../../App';

const Settings = (props, { navigation }) => {
    
    const context = useContext(ThemeContext);

    function handleColor(color) {
        props.onChange(color);
    }
    
    return (
        <Fragment>
            <SafeAreaView style={[styles.container, {backgroundColor: theme[context.color][7]}, {height: context.height}]}>
                <Header color={context.color} navigation={props.navigation}/>
                <View style={[styles.content, {backgroundColor: theme[context.color][1]}]}>
                    <ScrollView>
                        <Text style={[styles.text, {color: theme[context.color][7]}]}>Settings</Text>
                        {Object.keys(theme).map((color) => {
                            return (
                                <Button key={color} color={color} title={color} onPress={() => context.handleColor(color)} />
                            )
                        })}
                    </ScrollView>
                </View>
                <Navbar color={context.color} navigation={props.navigation} />
            </SafeAreaView>
            <StatusBar backgroundColor={theme[context.color][0]} barStyle='light-content' />
        </Fragment>
    );
};

export default Settings;

const styles = StyleSheet.create({
    content: {
        flex: 8,
        width: '100%',
        backgroundColor: theme.blue[1],
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: theme.blue[7],
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.blue[7],
        alignItems: 'center',
        justifyContent: 'center',
      }
  });