import React from "react";
import { Text, View,Button,StyleSheet } from "react-native"

const SecondPage = () =>{
    return(
        <View style={styles.container}>
          <Button title="Login"/>
        </View>
    )
    }



    export default SecondPage;



    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        button: {
          paddingHorizontal: 20,
          paddingVertical: 10,
          marginVertical: 10,
          borderRadius: 5
        }
      });
    
    
    