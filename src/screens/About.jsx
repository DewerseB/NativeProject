import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import theme from '../config/theme';

const About = (props) => {

    return (
        <Fragment>
                <Text>About</Text>
        </Fragment>
    );
};

export { About };

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