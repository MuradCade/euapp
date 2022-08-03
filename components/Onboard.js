import { StyleSheet, Text, View,StatusBar,Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    title: 'Welcome To Eelo University',
    text: 'Home Of Technology And innovation',
    image: require('.././assets/scroll-img1.png'),
    bg: '#59b2ab',
  },
  {
    title: 'This Application Is Only For Eu Students',
    text: 'This Application Is Dedicated for Eelo University Students',
    image: require('.././assets/scroll-img3.png'),
    bg: '#febe29',
  },
 
 
  
];
const Onboard = (props) => {
  const renderItem = ({item}) =>{
    return(
      <View style={styles.slide}>
        <StatusBar color="black"/>
      <Image source={item.image} style={styles.image}/>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.text}</Text>
      </View>
      </View>
    )

    
  }
  
  const keyExtractor = (item) => item.title;

  const renderPrevButton= () =>{
    return(
      <View>
        <Text  style={styles.ButtonText}>Prev</Text>
      </View>
    )
    
  }
  const renderNextButton = () =>{
    return(
      <View>
        <Text style={styles.ButtonText}>Next</Text>
      </View>
    )

  }
  const renderDoneButton = () =>{
    return(
      <View>
        <Text style={styles.ButtonText}>Done</Text>
      </View>
    )
  }

//   check is user is clicked done button
const  handledone = () =>{
        props. handledone();
}
  return (
    <View style={{flex: 1}}>
    <StatusBar translucent backgroundColor="transparent" />
   
    <AppIntroSlider
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      renderDoneButton = {renderDoneButton}
      renderNextButton = {renderNextButton}
      renderPrevButton = {renderPrevButton}
      showPrevButton
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      data={data}
      onDone = {handledone}
    />
    
 
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white'

  },
  image:{
      width:400,
      height:400,
      marginVertical:60,
  },
  title:{
          color:'#23456789',
          fontSize:18,
          fontWeight:'bold',
          marginHorizontal:0 ,
          textAlign:'center'         

  },
  desc:{
            alignItems:'center',
            color:'#8D8DAA',
            fontSize:10,
            textAlign:'center',
            marginHorizontal:60
  },
  ButtonText:{
    fontSize:18,
    color:'#5463FF',
    fontWeight:'bold'
  },
  dotStyle:{
    backgroundColor:'#8D8FAD'
  },
  activeDotStyle:{
    backgroundColor:"#1C215D"
  }
});

export default Onboard;