import React, { Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as Config from '../config';

const LoginTitle = (props) => {
    return (
        <Text style={[Config.styles.screenTitleText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'login', 'title')}</Text>
    );
};

const Login = (props) => {

    return (
        <Fragment>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                <Text style={[Config.styles.sectionText, {color: Config.getColor(props.color, 7)}]}>Blablabla</Text>
            </View>
        </Fragment>
    );
};

export { Login, LoginTitle };

const styles = StyleSheet.create({
});