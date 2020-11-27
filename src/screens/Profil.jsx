import React, { Fragment, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

import * as Config from '../config';

const ProfileTitle = (props) => {
    return (
        <Text style={[Config.styles.screenTitleText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'profile', 'title')}</Text>
    );
};

const Profile = (props) => {

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    return (
        <Fragment>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                <View style={Config.styles.sectionTitleContainer}>
                    <Text style={[Config.styles.sectionTitleText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'profile', 'login')}</Text>
                </View>
                <View style={Config.styles.sectionContentContainer}>
                    <TextInput
                        style={Config.styles.formField}
                        placeholder="Login"
                        onChangeText={text => setLogin(text)}
                        defaultValue={login}
                    />
                    <TextInput
                        style={Config.styles.formField}
                        placeholder="Password"
                        onChangeText={text => setPass(text)}
                        defaultValue={pass}
                        secureTextEntry={true}
                    />
                    <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => alert(login)}>
                        <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'profile', 'login').toUpperCase()}</Text>
                    </Pressable>
                </View>
            </View>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                <View style={Config.styles.sectionTitleContainer}>
                    <Text style={[Config.styles.sectionTitleText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'profile', 'register')}</Text>
                </View>
                <View style={Config.styles.sectionContentContainer}>
                    <TextInput
                        style={Config.styles.formField}
                        placeholder="Login"
                        onChangeText={text => setLogin(text)}
                        defaultValue={login}
                    />
                    <TextInput
                        style={Config.styles.formField}
                        placeholder="Password"
                        onChangeText={text => setPass(text)}
                        defaultValue={pass}
                        secureTextEntry={true}
                    />
                    <Pressable style={[Config.styles.button, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => alert(pass)}>
                        <Text style={[Config.styles.buttonText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'profile', 'register').toUpperCase()}</Text>
                    </Pressable>
                </View>
            </View>
        </Fragment>
    );
};

export { Profile, ProfileTitle };

const styles = StyleSheet.create({
});