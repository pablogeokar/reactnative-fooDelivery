import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import { Colors, Images, Fonts } from '../contants';
import { Display } from '../utils'
import AppLoading from 'expo-app-loading';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_900Black,
  useFonts
} from '@expo-google-fonts/poppins'


const SplashScreen = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_800ExtraBold,
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_900Black
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
    fontFamily: Fonts.POPPINS_LIGHT
  }
})

export default SplashScreen;

