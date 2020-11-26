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
        <Template screen={Screens.Home} />
    );
};

const LoginRoute = () => {
    return (
        <Template screen={Screens.Login} />
    );
}

const AboutRoute = () => {
    return (
        <Template screen={Screens.About} />
    )
};

const SettingsRoute = () => {
    return (
        <Template screen={Screens.Settings} />
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