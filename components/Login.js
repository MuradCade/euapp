import React, { useState } from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import { TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAvoidingView } from "react-native-web";

  const islog = false;
const Login = () =>{
    return(
        
<KeyboardAvoidingView>
<View style={styles.container}>
            <Image source={require('../assets/logo.jpg')} style={styles.logo}/>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.desc}>Get Unlimited Access To Your Account</Text>
          <Text style={styles.label}>Username</Text>
            <TextInput style = {styles.input}
           
               underlineColorAndroid = "transparent"
               placeholder = "Enter Your Username ..."
               placeholderTextColor = "#8D8DAA"
               autoCapitalize = "none"
            //    onChange={text=>setUsername(text)}
               
               />
                
          <Text style={styles.label}>Password</Text>
            <TextInput style = {styles.input2}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Your Password ..."
               placeholderTextColor = "#8D8DAA"
               autoCapitalize = "none"
               secureTextEntry={true}
            //    onChange={text=>setPwd(text)}
             

               />
      
          <Text style={styles.flabel}>Select Faculty</Text>
         <View style={styles.select}>
         <RNPickerSelect 
        //   onChange={text=>setfaculty(text)}
                //  onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "ComputerScience", value: "02" },
                     { label: "Enginering", value: "TypeScript" },
                     { label: "Telcominication", value: "Python" },
                     { label: "Health", value: "Java" },
                     { label: "Business", value: "C++" },
                     { label: "Management", value: "C" },
                 ]}
             />
         </View>
   
            
        {/* singup btn */}
          <View style={styles.btn}>
            <View style={styles.login}>
                <Text style={styles.loginText}>Login</Text>
            </View>
      
                <Text style={styles.signup}>Don't Have Account <Text onPress={()=> navigation.navigate('Signup')}    style={styles.active}>  SignUp</Text></Text>

     
          </View>
        </View>
</KeyboardAvoidingView>
       
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:120,
        height:120,
        marginBottom:10,
        borderRadius:50
        
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        color:'#5651E5',
        marginBottom:4,
    },
    desc:{
        color:'gray',
    },

    
    input: {
        marginTop:40,
        marginBottom:-10,
        height: 48,
        width:280,
        borderWidth:3,
        borderColor: '#23456789',
        // borderWidth: 3,
        padding:10,
        borderRadius:10,
        shadowColor:'#865858',
        shadowRadius:20,
     
     },
     input2:{
        marginTop:40,
        marginBottom:20,
        height: 48,
        width:280,
        borderWidth:2,
        borderColor: '#23456789',
        // borderWidth: 3,
        padding:10,
        borderRadius:10,
        shadowColor:'#865858',
        shadowRadius:20,
     },
     label:{
      position:'relative',
      top:30,
      right:100,
      color:'#23456789',
      fontWeight:'bold'
     },
    // btn
    btn:{
        widht:100,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // marginLeft:20
        marginTop:30
    },
    
    login:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8D8DAA',
        padding:10,
        width:220,
        textAlign:'center',
    },
    loginText:{
        fontSize:18,
        color:'white',
        fontWeight:'700'
        
    },
    signup:{
        marginTop:14,
        fontSize:12,
        color:'#23456789',

    },
    active:{
        color:'#5463FF'
    },
    select:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:274,
        height:48,
        borderWidth:2,
        borderColor:'#23456789',
        fontSize:18,
        borderRadius:10
         // to ensure the text is never behind the icon 
},
flabel:{
   position:'relative',
   top:-2,
   left:'-22%',
   marginBottom:10 ,
   color:'#23456789',
   fontWeight:'bold'
}

})