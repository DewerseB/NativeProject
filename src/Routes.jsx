import React from 'react';

import Template from './Template';
import * as Screens from './screens/index';

export const mainNavRef = React.createRef();

export const mainNavigate = (name, params) => {
    mainNavRef.current?.navigate(name, params);
};

// export const getMainRoute = () => {
//     return mainNavRef.current?.state;
// }

export const ProfileRoute = () => {
    return (
        <Template screen={Screens.Profile} title={Screens.ProfileTitle} />
    );
}

export const HomeRoute = () => {
    return (
        <Template screen={Screens.Home} title={Screens.HomeTitle} />
    );
};

export const AboutRoute = () => {
    return (
        <Template screen={Screens.About} title={Screens.AboutTitle} />
    )
};

export const SettingsRoute = () => {
    return (
        <Template screen={Screens.Settings} title={Screens.SettingsTitle} />
    );
};