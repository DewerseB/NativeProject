import React, { Fragment, useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import theme from '../../theme';

import Content from '../Content';

import { ThemeContext } from '../../App';

const About = () => {

    const context = useContext(ThemeContext);

    return (
        <Fragment>
                <Text>About</Text>
        </Fragment>
    );
};

export default About;

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