import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import theme from '../config/theme';

import Content from '../Content';

const Home = (props) => {

    return (
        <Fragment>
                <Content color={props.color} />
        </Fragment>
    );
};

export { Home };

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