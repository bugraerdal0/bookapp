import React, { useEffect, useCallback } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_900Black,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_500Medium_Italic,
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_700Bold_Italic,
  PlayfairDisplay_800ExtraBold_Italic,
  PlayfairDisplay_900Black_Italic,
} from '@expo-google-fonts/playfair-display';
import * as SplashScreen from 'expo-splash-screen';
import { Title } from 'react-native-paper';

SplashScreen.preventAutoHideAsync();

const Welcome = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
    PlayfairDisplay_900Black,
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_500Medium_Italic,
    PlayfairDisplay_600SemiBold_Italic,
    PlayfairDisplay_700Bold_Italic,
    PlayfairDisplay_800ExtraBold_Italic,
    PlayfairDisplay_900Black_Italic,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  };
  const onSignInPressed = async () => {
    try {
      // const user = await signInWithEmailAndPassword(email, password);
      // henüz kayıt olma mantığını yerleştirmediğim için,
      // direkt Home kısmına navigate edecek
      // Home ekranına google haritalar ekleyeceğim
      console.warn('Directing');
      navigation.navigate('SignIn');
    } catch (error) {
      setErrorMessage(error.message);
      console.warn('No account has been found with these email or password');
    }
  };

  const onSignUpPressed = () => {
    console.warn('Directing');
    navigation.navigate('SignUp');
  };
  const onPasswordPressed = () => {
    console.warn('Directing');
    navigation.navigate('ForgotPassword');
  };
  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground source={require('../../../assets/cover.jpg')}
        resizeMode='cover' style={styles.img}>
        <View>
          <Title style={styles.logo1}>LIBRARE</Title>
        </View>
        <View style={styles.button}>
          <CustomButton title='Sign In' onPress={onSignInPressed} />
          <CustomButton title='Forgot Password' type='one' onPress={onPasswordPressed} />
          <View style={styles.signup}>
            <Text style={styles.text}>Don't have an account? </Text>
            <TouchableOpacity onPress={onSignUpPressed} ><Text style={styles.signup_btn}>Sign Up</Text></TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    marginTop: 300,
  },
  logo1: {
    color: '#F2E7D5',
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 30,
  },
  signup: {
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay_600SemiBold',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
  text: {
    color: '#F2E7D5',
    fontFamily: 'PlayfairDisplay_600SemiBold',
    textAlign: 'justify',
  },
  signup_btn: {
    color: '#faf',
    fontFamily: 'PlayfairDisplay_600SemiBold',
  }
});

export default Welcome;
