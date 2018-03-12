import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class DownloadImageForUrl extends Component {
    render() {
        let pic = {
            uri: 'https://res.cloudinary.com/demo/image/upload/w_200/lady.jpg'
        };
        return (
            <Image source={pic} style={{width: 200, height: 110}}/>
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => DownloadImageForUrl);