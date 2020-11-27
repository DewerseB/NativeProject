import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
// import { withNavigation } from 'react-navigation';

import * as Config from './config';
import * as Routes from './Routes';
import { Button3D } from './components/Button3D';

const Header = (props) => {

    // const [mainCurrentRoute, setMainCurrentRoute] = useState(Routes.getMainRoute());

    // console.log(Routes.mainState());
    return (
        <View style={[styles.header, {backgroundColor: Config.getColor(props.color, 0)}]}>
            <View style={styles.headerContent}>
            <Button3D color={props.color} language={props.language} height={44} width={44} type={'FA'} label={'user'} route={'Profile'} onPress={() => Routes.mainNavigate('Profile', { name: 'Test' })} />
            <Button3D color={props.color} language={props.language} height={44} width={44} type={'FA'} label={'key'} onPress={() => console.log(props.mainRouteState)} />
            <Button3D color={props.color} language={props.language} height={44} width={44} type={'FA'} label={'cog'} route={'Settings'} onPress={() => Routes.mainNavigate('Settings', { name: 'Test' })} />
                {/* <Pressable style={[Config.styles.buttonFA, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => Routes.mainNavigate('Profile', { name: 'Test' })}>
                    <FontAwesomeIcon style={[Config.styles.iconFA, {color: Config.getColor(props.color, 7)}]} icon="user" size={24} />
                </Pressable>
                <Pressable style={[Config.styles.buttonFA, {backgroundColor: Config.getColor(props.color, 3)}]} onPress={() => Routes.mainNavigate('Settings', { name: 'Test' })}>
                    <FontAwesomeIcon style={[Config.styles.iconFA, {color: Config.getColor(props.color, 7)}]} icon="cog" size={24} />
                </Pressable> */}
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: Config.themes.blue[0],
        alignItems: 'center',
        justifyContent: 'center',
        // overflow: 'hidden',
    },
    headerContent: {
        flex: 1,
        flexDirection: 'row',
        // position: 'relative',
        // top: 5,
        minWidth: 300,
        maxWidth: 864,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 18,
    }
});