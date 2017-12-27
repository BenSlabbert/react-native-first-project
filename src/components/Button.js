import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {

    const { textStyle, buttonStyle } = styles;

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={() => console.log( 'hello' )}>
            <Text style={textStyle}>
                Purchase
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        // expand to fill as much content as possible
        flex: 1,
        // stretch to fill
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
