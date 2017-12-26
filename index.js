import React from 'react';
import { Text, AppRegistry } from 'react-native';

import Header from './src/components/Header';

const App = () => {
    return (
        <Text>
            
            <Header/>
        </Text>
    );
};

// must render at least one component
AppRegistry.registerComponent( 'FirstProject', () => App );
