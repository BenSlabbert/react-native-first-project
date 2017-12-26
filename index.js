import React from 'react';
import { Text, AppRegistry } from 'react-native';

const App = () => {
    return (
        <Text>
            Hello
        </Text>
    );
};

// must render at least one component
AppRegistry.registerComponent( 'FirstProject', () => App );
