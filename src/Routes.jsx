import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Template from './Template';
import * as Screens from './screens/index';

const mainNavRef = React.createRef();

const mainNavigate = (name, params) => {
    mainNavRef.current?.navigate(name, params);
};

const HomeRoute = () => {
    return (
        <Template screen={Screens.Home} title={Screens.HomeTitle} />
    );
};

const LoginRoute = () => {
    return (
        <Template screen={Screens.Login} title={Screens.AboutTitle} />
    );
}

const AboutRoute = () => {
    return (
        <Template screen={Screens.About} title={Screens.LoginTitle} />
    )
};

const SettingsRoute = () => {
    return (
        <Template screen={Screens.Settings} title={Screens.SettingsTitle} />
    );
};
export {
    HomeRoute,
    AboutRoute,
    LoginRoute,
    SettingsRoute,
    mainNavRef,
    mainNavigate,
};