
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    topbar: {
      alignSelf: 'stretch',
      height:106,
      flexDirection: 'row', // row
      justifyContent:'space-between',
      backgroundColor: '#E8ECF3',
      alignItems: 'flex-end',
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom:10,
    },
    // Home.js  Page -----------------------------------------------------------
    container: {
      flex: 1,
      paddingVertical: 50,
      paddingHorizontal: 20,
      backgroundColor: '#E8ECF3',
    },
    menu:{
      marginLeft:10,
      marginBottom:8
    },
    logo:{
      width:50,
      height:50,
      borderRadius:100/2,
      marginRight:10,

    },
    title:{
      fontSize: 28,
      color: '#0A102C',
      textAlign: 'center',
      fontFamily:'InterSemiBold'
      
    },
    content:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    boxShadow:{
      marginTop:24,
      marginBottom:24,
      borderRadius:100/3,
      width:340,
      height:55,
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
      backgroundColor:'#f1f1f1',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,

      elevation: 18,
    },
    searchInput:{
      fontSize:20,
    },
    searchIcons:{
      marginTop:14
    },
    logoHorizantel:{
      width:42,
      height:42,
      margin:12,
    },
    titleHorizantel:{
      fontSize: 20,
      color: '#000',
      textAlign: 'center',
      fontFamily:'InterLight',
      marginTop:8,
    },
    boxHorizantel:{
      width:120,
      margin:8.5,
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },
    HomeTXT:{
      fontSize:23,
      justifyContent:'flex-start',
      right:'22%',
      marginTop:20,
      color:'#3B3B3B',
    },
    packBox:{margin:20,borderRadius:100/4,backgroundColor:'#F3C960',height:350,width:280,marginTop:15,marginBottom:20,padding:0,shadowColor: "#000",shadowOffset: {width: 0,height: 9,},shadowOpacity: 0.48,shadowRadius: 11.95,elevation: 18,},
    packLogoContainer:{
      height:200,
      justifyContent:'center',
      alignItems:'center',
    },
    titleContainerPack:{
      margin:8,
    },
    packBoxLogo:{
      height:350,
      width:350,
    },
    packBoxTitle:{
      fontSize:15,
      marginLeft:10,
      color:'#fff',
    },
    // Contact -----------------------------------------------------------
    containercontact: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    txtbodycontact:{
      fontSize: 34,
      color: '#0A102C',
      textAlign: 'center',
    },
  
    // About.js Page -----------------------------------------------------------
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    // option _1.js -----------------------------------------------------------
    option_1: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    // option_2.js -----------------------------------------------------------
    option_2: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });