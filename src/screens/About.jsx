import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as Config from '../config';

const About = (props) => {

    return (
        <Fragment>
            <Text style={[Config.styles.screenTitle, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'about', 'title')}</Text>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor(props.color, 2)}]}>
                <Text style={[Config.styles.sectionText, {color: Config.getColor(props.color, 7)}]}>{Config.getText(props.language, 'about', 'description')}</Text>
            </View>
            <View style={[Config.styles.sectionView, {backgroundColor: Config.getColor('wrongThemeName', 2)}]}>
                <Text style={[Config.styles.sectionText, {color: Config.getColor('wrongThemeName', 7)}]}>{Config.getText(props.language, 'about', 'more')}</Text>
            </View>
        </Fragment>
    );
};

export { About };

const styles = StyleSheet.create({
});