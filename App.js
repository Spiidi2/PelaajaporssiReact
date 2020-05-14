import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './navigation/drawer';



const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

// Lataa custom fontit. Jos ei saa ladattua fontteja, näyttää lataus sivun. 
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Navigator/>
    );
  }
  else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() =>
        setFontsLoaded(true)}
        /> 
    )
  }
}