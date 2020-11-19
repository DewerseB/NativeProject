import React from 'react';

import Template from './Template';
import Home from './screens/Home';
import About from './screens/About';
import Settings from './screens/Settings';

const HomeRoute = () => {
    return (
        <Template screen={Home} />
    );
};

const SettingsRoute = () => {
    return (
        <Template screen={Settings} />
    );
};

const AboutRoute = () => {
    return (
        <Template screen={About} />
    )
}

export {
    HomeRoute,
    AboutRoute,
    SettingsRoute,
};