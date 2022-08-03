import React, { useState } from "react";
import { View,Text } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import Signup from './Signup';
import Home from './Dashboard';

console.log(islog);
const Navigator = () =>{
    const Stack = createStackNavigator();
    const [isLogedIn, setLogedIn] = useState(false);
     return(
        <NavigationContainer>
            
       { isLogedIn ?    <Stack.Navigator>
           <Stack.Screen name="Home" component={Home} options={{
                    headerShown:false,
             
           }}/>
            
           </Stack.Navigator>
           :
         <Stack.Navigator>
   
                     <Stack.Screen name="Login" component={Login} options={{
                    headerShown:false,
             
                 }}/>
                 
                          <Stack.Screen name="Signup" component={Signup} options={{
                         headerTitleAlign:'center',
                         visible: true,
                         title: '',
                         backTitle: null,
                         
                  
                }}/>
            </Stack.Navigator>}
                
                 </NavigationContainer>
     )
 }
 
 export default Navigator;