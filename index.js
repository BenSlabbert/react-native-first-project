import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/Header';

const App = () => (
    <Header/>
);

// must render at least one component
AppRegistry.registerComponent( 'FirstProject', () => App );
