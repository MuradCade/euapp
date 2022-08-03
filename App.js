import { useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

import Onboard from './components/Onboard';
import Navigator from './components/Navigator';


const App = () =>{
  const [showOboard,setShowonboard] = useState(true);
  const HandleOnboardFinish= () => {
      setShowonboard(false);
  }
  return(
    <View style={{flex: 1}}>
     {showOboard &&  <Onboard handledone={HandleOnboardFinish}/>}
     {!showOboard && <Navigator/>}
      
    </View>
  )
}

export default App;