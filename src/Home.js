import *as React from 'react';
import { FontAwesome,Fontisto } from '@expo/vector-icons';
import {View,Text,ScrollView, Button,Image, TextInput, FlatList} from 'react-native';
import {styles} from '../Styles/GlobalStyles';
import { useFonts } from 'expo-font';



const Home = ({ navigation }) => {
  const [loaded] = useFonts({
    Bold: require('../assets/Font/Inter-Bold.ttf'),
    InterSemiBold: require('../assets/Font/Inter-SemiBold.ttf'),
    InterMedium: require('../assets/Font/Inter-Medium.ttf'),
    InterLight: require('../assets/Font/Inter-Light.ttf'),
    InterExtraLight: require('../assets/Font/Inter-ExtraLight.ttf'),
  });
  
  if (!loaded) {
    return null;
  }else{

  return (
    <View  style={{ flex: 1,backgroundColor:'#EEECF0', }}>
        <View style={styles.topbar}>
            <View style={{flex:0}}>
               <Fontisto  style={styles.menu} name="nav-icon-list-a" size={24} color="#f0A62B" onPress={()=>navigation.openDrawer()} />
            </View>
            <View  style={{flex:0}}>
                <Image style={styles.logo} source={require('../assets/Icons/gymProfile.jpg')}  />
                {/* <Text>Right</Text> */}
            </View>
        </View>
   
        <ScrollView style={{}} >
          <View style={styles.content} >
              {/* Content  */}
            
              <Text style={styles.title}>What you will do tody ?</Text>
              <View style={styles.boxShadow}>
                <TextInput style={styles.searchInput} placeholder='Search ...' maxLength={24} />
                <FontAwesome name="search" size={24} style={styles.searchIcons} />
              </View>
              <ScrollView
                // style={{backgroundColor:'red',}}
                 horizontal={true}
                 decelerationRate={0}
                 contentInset={{
                  top: 0,
                  left: 30,
                  bottom: 0,
                  right: 30,
                }}>
                
                <View style={styles.boxHorizantel}>
                  <View style={{ backgroundColor:'#A6A4B5',borderRadius:100/2,shadowColor: "#000",shadowOffset: {width: 0,height: 9,},shadowOpacity: 0.48,shadowRadius: 11.95, elevation: 15,}}>
                    <Image style={styles.logoHorizantel} source={require('../assets/Icons/hdid.png')}  />
                  </View>
                <Text style={styles.titleHorizantel}>Crossfit</Text>
                </View>
                <View style={styles.boxHorizantel}>
                  <View style={{ backgroundColor:'#77dbce',borderRadius:100/2,shadowColor: "#000",shadowOffset: {width: 0,height: 9,},shadowOpacity: 0.48,shadowRadius: 11.95, elevation: 15,}}>
                    <Image style={styles.logoHorizantel} source={require('../assets/Icons/rope.png')}  />
                  </View>
                <Text style={styles.titleHorizantel}>Fitness</Text>
                </View>
                <View style={styles.boxHorizantel}>
                  <View style={{ backgroundColor:'#EAAD61',borderRadius:100/2,shadowColor: "#000",shadowOffset: {width: 0,height: 9,},shadowOpacity: 0.48,shadowRadius: 11.95, elevation: 15,}}>
                    <Image style={styles.logoHorizantel} source={require('../assets/Icons/rings.png')}  />
                  </View>
                <Text style={styles.titleHorizantel}>Gymnastics</Text>
                </View>
                <View style={styles.boxHorizantel}>
                  <View style={{ backgroundColor:'#B3D3F1',borderRadius:100/2,shadowColor: "#000",shadowOffset: {width: 0,height: 9,},shadowOpacity: 0.48,shadowRadius: 11.95, elevation: 15,}}>
                    <Image style={styles.logoHorizantel} source={require('../assets/Icons/shoas.png')}  />
                  </View>
                <Text style={styles.titleHorizantel}>Athletics</Text>
                </View>
                

                </ScrollView>
               
                <Text style={styles.HomeTXT}>Workouts pack </Text>
                <ScrollView
                // style={{backgroundColor:'red',}}
                 horizontal={true}
                 decelerationRate={0}
                 contentInset={{
                  top: 0,
                  left: 30,
                  bottom: 0,
                  right: 30,
                }}>
                
                <View style={styles.packBox}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styles.titleContainerPack}>
                          <Text style={styles.packBoxTitle}>2 Hours</Text>
                          <Text style={styles.packBoxTitle}>15 exercises</Text>
                          <Text style={styles.packBoxTitle}>+1500 xp</Text>
                        </View>
                    <View style={styles.titleContainerPack}>
                    <Image style={styles.logoHorizantel} source={require('../assets/Icons/star.png')}  />
                        </View>
                  </View>
                  
                  <View style={styles.packLogoContainer}>
                    <Image style={styles.packBoxLogo} source={require('../assets/Icons/running.png')}  />
                  </View>
                  <Text style={{color:'#fff' ,fontSize:22,fontFamily:'Bold',marginLeft:10,}}>Krypthon</Text>
                  <Text style={{color:'#fff',fontSize:14,fontFamily:'InterMedium',marginLeft:10,}}>Ben Smith program</Text>
                
                </View>
                <View style={{margin:20,borderRadius:100/4,backgroundColor:'#B3D3F1',height:350,width:280,marginTop:15,marginBottom:20,padding:0,shadowColor: "#000",shadowOffset: {width: 0,height: 9,},shadowOpacity: 0.48,shadowRadius: 11.95,elevation: 18,}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styles.titleContainerPack}>
                          <Text style={styles.packBoxTitle}>2 Hours</Text>
                          <Text style={styles.packBoxTitle}>15 exercises</Text>
                          <Text style={styles.packBoxTitle}>+1500 xp</Text>
                        </View>
                    <View style={styles.titleContainerPack}>
                    <Image style={styles.logoHorizantel} source={require('../assets/Icons/star.png')}  />
                        </View>
                  </View>
                  
                  <View style={styles.packLogoContainer}>
                    <Image style={styles.packBoxLogo} source={require('../assets/Icons/running.png')}  />
                  </View>
                  <Text style={{color:'#fff' ,fontSize:22,fontFamily:'Bold',marginLeft:10,}}>Krypthon</Text>
                  <Text style={{color:'#fff',fontSize:14,fontFamily:'InterMedium',marginLeft:10,}}>Ben Smith program</Text>
                
                </View>
                

                </ScrollView>
               
              {/* <Button title='Got To About' onPress={() => navigation.push("About")} /> */}
         
          
          </View>
      

        </ScrollView>
    </View>
  );
  }
};

export default Home;
