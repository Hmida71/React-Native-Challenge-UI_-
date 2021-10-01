import React from 'react';
import {View,Text, Button} from 'react-native';
import {styles} from '../Styles/GlobalStyles'

const Contact = ({ navigation }) => {
  
  return (
    <View style={styles.containercontact}>
      <Text style={styles.txtbodycontact}>Contact Page</Text>
      <Button title='Got option 1 now !!' onPress={()=>{navigation.push('option_1')}} />
    </View>
  );
};


export default Contact;
