import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/Header';

const App = () => (
    <Header title='Albums'/>
);

// must render at least one component
AppRegistry.registerComponent( 'FirstProject', () => App );
