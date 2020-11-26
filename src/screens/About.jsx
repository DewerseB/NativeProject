import React, { Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as Config from '../config';

const AboutTitle = (props) => {
    return (
        <Text style={[Config.styles.screenTitleText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'about', 'title')}</Text>
    );
};

const About = (props) => {

    return (
        <Fragment>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                <Text style={[Config.styles.sectionText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'about', 'description')}</Text>
            </View>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor('wrongThemeName', 2)}]}>
                <Text style={[Config.styles.sectionText, {color: Config.getColor('wrongThemeName', 7)}]}>{Config.getText(props.language, 'about', 'more')}</Text>
            </View>
        </Fragment>
    );
};

export { About, AboutTitle };

const styles = StyleSheet.create({
});