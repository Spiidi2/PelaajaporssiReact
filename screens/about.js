import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About({ navigation }) {

    const image = { uri: 'https://wallpapercave.com/wp/ukzmAzH.jpg'}

    return (
        <ImageBackground source={image} style={globalStyles.container}>
            <Text style={globalStyles.titleText}> Made by Teemu Lepistö</Text>
        </ImageBackground>
    )
}
