import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

import * as Config from '../config';

const Login = (props) => {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View style={[Config.styles.screenView, {backgroundColor: Config.getColor(props.color, 1)}]}>
            <View style={[Config.styles.screenTitleContainer, {backgroundColor: Config.getColor(props.color, 0)}]}>
                <Text style={[Config.styles.screenTitleText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'login', 'title')}</Text>
            </View>
            <View style={Config.styles.screenContentContainer}>
                <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                    <Text style={[Config.styles.sectionText, {color: Config.getColor(props.color, 7)}]}>
                    Blabla
                    </Text>
                </View>
            </View>
        </View>
    );
};

export { Login };

const styles = StyleSheet.create({
});