import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home')
      }
    })
    return unsubscribe;
  }, [])

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('SIGNED IN')

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // ...




  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={require('../../../assets/signincover.jpg')} resizeMode='cover' style={styles.img} >
        <View style={styles.inputcover}>
          <CustomInput label="Email" onChangeText={handleEmailChange} value={email} placeholder='enter your email' />
          <CustomInput label="Password" onChangeText={handlePasswordChange} value={password} secureTextEntry={true} placeholder='enter your password' />
          <CustomButton title="Sign In" onPress={handleSignin} />
        </View>
      </ImageBackground>
    </SafeAreaView >
  )
}

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'black',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputcover: {
    alignContent: 'center',
    marginTop: 60,
    paddingVertical: 16,
  },
});
