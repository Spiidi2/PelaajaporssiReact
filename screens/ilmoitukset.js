import React, { useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import RegistrationForm from './registrationForm';

export default function Ilmoitus({ navigation }) {

    const image = { uri: 'https://wallpapercave.com/wp/ukzmAzH.jpg'}

    const [modalOpen, setModalOpen] = useState(false /* Modal pysyy kiinni aluksi */);
    const [registration, setRegistration] = useState([
        { name: 'Henri Laine', age: 30, location: 'Helsinki', experience: '3', key: '1' },
        { name: 'Kaapo Kaakko', age: 20, location: 'Helsinki', experience: '5', key: '2'  },
        { name: 'Patrik Heinola', age: 24, location: 'Helsinki', experience: '1', key: '3' }
    ]);

    const addRegistration = (registration) => {
        registration.key = Math.random.toString();
        setRegistration((currentRegistration) => {
            return [registration, ...currentRegistration ]
        });
        setModalOpen(false);
    }

    return (
        <ImageBackground source={image} style={globalStyles.container}>
            {/* Modalin avaaminen ja sen asetukset  */}
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                    
                    <MaterialIcons
                    // Sulkee modalin
                    name='close'
                    size={24}
                    style={{ ...styles.modalToggle, ...styles.modalClose }}
                    onPress={() => setModalOpen(false)}
                    />
                        <RegistrationForm addRegistration={addRegistration}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
            // Avaa modalin 
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
                />

            <FlatList
            // Vie datan player sivulle navigation.navigate ja objekti item avulla. Cardin käyttöönotto
            data= {registration}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Players', item)}>
                    <Card>
            <Text style={globalStyles.titleText}>{ item.name }, {item.age}, {item.location} </Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
            </ImageBackground>
    )
}

const styles = StyleSheet.create ({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10, 
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    }

})