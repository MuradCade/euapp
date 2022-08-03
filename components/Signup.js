import React, { useState } from 'react';
import {StyleSheet,View,Text,Image,TextInput, Touchable} from 'react-native';
import {auth} from '../firebase';


const Signup = () =>{
    const [FullName,setFullname] = useState();
    const [Username,setUsername] = useState();
    const [Faculty,setfaculty] = useState();
    const [Password,setPassword] = useState();

const handleSignup = () => {
    auth
     .createUserWithUsernameAndPassword(Username,Password)
     .then(UserCrendentials=>{
        const user = UserCrendentials.user;
        console.log(user);
    })
     .catch(error=>alert(error.message));
}
    return(
            
<KeyboardAvoidingView>
        <View style={styles.container}>
           <Text style={styles.head}>Crate New Account</Text>
            <Text style={styles.subtitle}>Signup To Get Unlimited Service</Text>
            <View>
                <Text style={styles.alllabel}>FullName</Text>
                <TextInput style = {styles.allinput}
               underlineColorAndroid = "transparent"
               placeholder = "Enter  FullName"
               placeholderTextColor = "#8D8DAA"
            //    autoCapitalize = "none"
            //    secureTextEntry={true}
               />
                <Text style={styles.alllabel}>Username</Text>
                <TextInput style = {styles.allinput}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Username"
               placeholderTextColor = "#8D8DAA"
            //    autoCapitalize = "none"
            //    secureTextEntry={true}
               />
                <Text style={styles.alllabel}>Faculty</Text>
                <TextInput style = {styles.allinput}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Faculty"
               placeholderTextColor = "#8D8DAA"
            //    autoCapitalize = "none"
            //    secureTextEntry={true}
               />
                <Text style={styles.alllabel}>Password</Text>
                <TextInput style = {styles.allinput}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Semeter"
               placeholderTextColor = "#8D8DAA"
               secureTextEntry={true}
            //    autoCapitalize = "none"
            //    secureTextEntry={true}
               />
             
            </View>
            <Touchable style={styles.signupbtn}>
                <Text style={styles.signuptext}>Signup</Text>

            </Touchable>
        </View>
        </KeyboardAvoidingView>
    )
    
}

export default Signup;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:-80,
    },
    head:{
        fontSize:28,
        marginBottom:2,
        color:'#5651E5'
    },
    subtitle:{
        color:'gray',
        fontSize:10,
        fontWeight:'bold'
    },
    // signup function decoration
    alllabel:{
        color:'#8D8DAA',
        position:'relative',
        right:-4,
        marginBottom:10,
        marginTop:10,
        fontSize:16,
        fontWeight:'bold'
    
    },
    allinput:{
        marginBottom:4,
        // marginTop:40,
        // marginBottom:20,
        height: 40,
        width:280,
        borderWidth:2,
        borderColor: '#23456789',
        // borderWidth: 3,
        paddingLeft:12,
        borderRadius:10,
        shadowColor:'#865858',
        shadowRadius:20,
    },
    signupbtn:{
     
        marginTop:30,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8D8DAA',
        padding:10,
        width:220,
        textAlign:'center',
    },
    signuptext:{
        color:'white',
        fontSize:18
    }
})
