import { StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        
        
        
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333',
        textAlign: 'center'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    },
    errorText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#6644c4',
    },
});


export const images = {
    experiences: {
        // numeron mukaan valitsee kuvan pelaajien taitotaso kohtaan.
        '0': require('../assets/images/star-0.png'),
        '1': require('../assets/images/star-1.png'),
        '2': require('../assets/images/star-2.png'),
        '3': require('../assets/images/star-3.png'),
        '4': require('../assets/images/star-4.png'),
        '5': require('../assets/images/star-5.png')
    }
}