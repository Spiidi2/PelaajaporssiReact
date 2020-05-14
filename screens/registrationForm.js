import React from 'react';
import { StyleSheet, View, Text, Button, TextInput} from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    // Validoinnin asetukset. Kaikki pakollisia kenttiä. Minimi 4 kirjainta nimen ja paikkakunnan kohdalla. Ikä 6-89 välillä.
    name: yup.string().required().min(4),
    age: yup.string().required().test('is-num-1-5', 'Age must be between 6 - 89', (val) => {
        return parseInt(val) < 90 && parseInt(val) > 5;
    }),
    location: yup.string().required().min(4),
    experience: yup.string().required().test('is-num-1-5', 'Experience must be number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })

})

export default function RegistrationForm( {addRegistration} ) {

    return (
        <View style= {globalStyles.container}>
            <Formik
            // Formi kenttien syöttötiedot ja uuden tiedon lähetys/tallenus
                initialValues={{ name: '', age: '', location: '', experience: ''}}
                validationSchema={reviewSchema}
                onSubmit={(values) => {
                    addRegistration(values);
                

                }}
                >
                {(props) => (
                    <View>
                        <TextInput 
                            // Formi kenttien tiedot ja error viestien käyttö
                            style={globalStyles.input}
                            placeholder='Etunimi Sukunimi'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            onBlur={props.handleBlur('name')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name} </Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Ikä'
                            onChangeText={props.handleChange('age')}
                            value={props.values.age}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('age')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.age && props.errors.age} </Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Kaupunki'
                            onChangeText={props.handleChange('location')}
                            value={props.values.location}
                            onBlur={props.handleBlur('location')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.location && props.errors.location} </Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Taitotaso (1-5)'
                            onChangeText={props.handleChange('experience')}
                            value={props.values.experience}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('experience')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.experience && props.errors.experience} </Text>

                        <FlatButton text='submit' onPress={props.handleSubmit}></FlatButton>
                    </View>
                )}
            </Formik>
        </View>
    )
}