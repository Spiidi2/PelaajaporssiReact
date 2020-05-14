import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Ilmoitukset from '../screens/ilmoitukset';
import Players from '../screens/players';
import Registration from '../screens/registrationForm';
import Header from '../shared/header';
import React from 'react';

const screens = {
    // Sivujen navigointi ja käyttöönotto. Headerin kautta navigointi
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Pelaajapörssi' />, 
           }
        }
    },
    Ilmoitukset: {
        screen: Ilmoitukset,
        navigationOptions: {
            title: 'Ilmoitukset',
          
        }
    },
    Players: {
        screen: Players,
        navigationOptions: {
            title: 'Tiedot',
         
        }
    },
    Registration: {
        screen: Registration,
        navigationOptions: {
            title: 'Ilmoittautuminen',
          
        }
    }

}

const HomeStack = createStackNavigator(screens, {
    // Kaikkien sivujen header asetus
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#bcc0c8', height: 80}
    }
});

export default HomeStack;