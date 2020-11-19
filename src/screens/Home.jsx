import React, { Fragment, useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import theme from '../../theme';

import Content from '../Content';

import { ThemeContext } from '../../App';

const Home = () => {

    const context = useContext(ThemeContext);

    return (
        <Fragment>
                <Content color={context.color} />
        </Fragment>
    );
};

export default Home;

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