import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

import * as Config from '../config';

const Login = (props) => {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View style={[Config.styles.screenView, {backgroundColor: Config.getColor(props.color, 1)}]}>
            <Text style={[Config.styles.screenTitle, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'login', 'title')}</Text>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                <Text style={[Config.styles.sectionText, {color: Config.getColor(props.color, 7)}]}>Login</Text>
                <TextInput
                    style={Config.styles.formField}
                    placeholder="Login"
                    onChangeText={text => setLogin(text)}
                    defaultValue={login}
                />
                <Text style={[Config.styles.sectionText, {color: Config.getColor(props.color, 7)}]}>Password</Text>
                <TextInput
                    style={Config.styles.formField}
                    placeholder="Password"
                    onChangeText={text => setPass(text)}
                    defaultValue={pass}
                />
                <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => alert(login)}>
                    <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'login', 'title').toUpperCase()}</Text>
                </Pressable>
            </View>
        </View>
    );
};

export { Login };

const styles = StyleSheet.create({
});