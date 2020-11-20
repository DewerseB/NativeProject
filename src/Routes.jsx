import React from 'react';

import Template from './Template';
import * as Screens from './screens/index';

const HomeRoute = () => {
    return (
        <Template screen={Screens.Home} />
    );
};

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
    SettingsRoute,
};