/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';
import ButtonP from './src/components/button';


const App = () => {

  return (
      <View style={styles.container}>
        <View style={styles.logotipo}>
        </View>
        <View style={styles.actions}>
        <Button color='#767676' onPress={()=>{}} title='Login' />
        <View style={styles.divider} ></View>
        <Button color='#767676' onPress={()=>{}} title='Cadastre-se' />
        </View>

        <ButtonP>dasda</ButtonP>

      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#292929'
  },
  actions:{
    justifyContent:'center',
    backgroundColor: '#292929',
    width: 240,
    left: 60,
    padding: 0,
  },
  logotipo:{
    width: 200,
    height: 150,
    top: -40,
    left: 82,
    backgroundColor: "#3A3A3A",

  },
  divider:{
    height: 5,
    top: -40,
    left: 82,
  }
});

export default App;
