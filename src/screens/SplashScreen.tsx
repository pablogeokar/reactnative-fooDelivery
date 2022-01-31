import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import { Colors, Images, Fonts } from '../contants';
import { Display } from '../utils'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';


const SplashScreen = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    'BOLD': require('../../assets/fonts/Poppins-Bold.ttf'),
    'LIGHT': require('../../assets/fonts/Poppins-Light.ttf'),
    'MEDIUM': require('../../assets/fonts/Poppins-Medium.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  setTimeout(() => {
    navigation.navigate('Welcome')
  }, 2000)

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image
        source={Images.PLATE}
        resizeMode='contain'
        style={styles.image}
      />
      <Text style={styles.titleText} >FooDelivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.POPPINS_BOLD
  }
})

export default SplashScreen;

