import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Button} from 'react-native';
import { globalStyles } from '../styles/global';
import FlatButton from '../shared/button';

export default function Home({ navigation }) {

    const image = { uri: 'https://wallpapercave.com/wp/ukzmAzH.jpg'}

    const pressHandler = () => {
        navigation.push('Ilmoitukset');
        navigation.goBack('Registration');
    }

    return (
        <ImageBackground source={image} style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Terveluloa Pelaajapörssiin!</Text>             
            <FlatButton text='Ilmoituksiin' onPress={pressHandler}/>

            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 10, 
        paddingHorizontal: 10,
        backgroundColor: '#6644c4',
        marginTop: -25
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})