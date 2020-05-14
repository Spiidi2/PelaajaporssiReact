import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        // Headerin asetukset ja drawer menun käyttöönotto
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/images/hockey_puck.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bcc0c8',
        
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        marginRight: 140,
      
    },
    icon: {
        position: 'absolute',
        left: -5
    },
    headerImage: {
        width: 36,
        height: 36,
        marginHorizontal: 30
        
    },
    headerTitle: {
        flexDirection: 'row',
    }

});