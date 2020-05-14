import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
    return (
        // Cardin tyyli
        <View style={styles.card}>
            <View style={styles.cardContent}>
            { props.children /* Kerää kaiken cardin sisälle tekemät tiedot ja tulostaa ne */ }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        elevation: 7,
        backgroundColor: '#fff',
        shadowOffset: {width:1, height: 1},
        shadowColor:'#333',
        shadowOpacity: 0.4,
        shadowRadius: 2,
        marginHorizontal: 1,
        marginVertical: 4
    },
    cardContent: {
        marginHorizontal: 20,
        marginVertical: 10,
    }
})