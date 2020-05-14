import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const RootDrawerNavigator = createDrawerNavigator({
    // Etusivun ja About sivun navigointi drawerin avulla.
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack
    }
});

export default createAppContainer(RootDrawerNavigator);