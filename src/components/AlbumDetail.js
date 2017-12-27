import React from 'react';
import { Text, View, Image } from 'react-native';

import CardSection from './CardSection';

import Card from './Card';

const AlbumDetail = ( { album } ) => {

    const { title, artist, thumbnail_image } = album;
    const { thumbnailStyle, headerContentStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View>
                    <Image style={thumbnailStyle}
                           source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    // must specify the image sizes
    thumbnailStyle: {
        height: 50,
        width: 50
    }
};

export default AlbumDetail;
