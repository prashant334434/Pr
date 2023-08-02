import { View, Text, SafeAreaView, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'

const AppPro = () => {
    const  isDarkTheme = useColorScheme() === 'dark'
  return (
   
          <SafeAreaView style={styles.container} >
      <View >
        <Text style={isDarkTheme ? styles.whiteText : styles.blackText}>hello</Text>
        <Text style={isDarkTheme ? styles.whiteText : styles.blackText}>hello</Text>
        <Text style={isDarkTheme ? styles.whiteText : styles.blackText}>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
      </View>
    </SafeAreaView>

  )
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
export default AppPro