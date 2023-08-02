/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';



function App() {
  const  isDarkTheme = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={styles.container} >
      <View >
        <Text style={isDarkTheme ? styles.whiteText : styles.blackText}>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
      flex:1 ,
      alignItems: 'center',
      justifyContent: 'center',

  },
  whiteText:{
    color: 'white',
  }
  ,
  blackText:{
    color: 'black',
  }
})


export default App;
