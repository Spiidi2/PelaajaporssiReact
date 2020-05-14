import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function Players({ navigation }) {
    const experience = navigation.getParam('experience')

    const image = { uri: 'https://wallpapercave.com/wp/ukzmAzH.jpg'}

    return (
        <ImageBackground source ={image} style={globalStyles.container}>
            <Card>
                {/*Kerää formin ja ilmoituksien pelaaja tiedot.  */}
                <Text>{navigation.getParam('name')}</Text>
                <Text>{navigation.getParam('age')}</Text>
                <Text>{navigation.getParam('location')}</Text>
                <View style={styles.experience}>
                    <Text>Taitotaso: </Text>
                    {/* Lukee numeron ja sen mukaan valitsee kuvan */}
                    <Image source={images.experiences[experience]} />
                </View>  
            </Card>
        </ImageBackground>
    )
}

const styles = StyleSheet.create ({
    experience:{
        flexDirection: 'row',
        justifyContent: 'center', 
        paddingTop: 10,
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }

})

