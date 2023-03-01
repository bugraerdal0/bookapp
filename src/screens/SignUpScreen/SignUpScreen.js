import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ImageBackground } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import { auth } from '../../../firebase';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log('SIGNED UP')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      console.log(`Submitted email: ${email}, password: ${password}`);
      setError('');
    }
  };

  // ...




  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../../assets/signupcover.jpg')} resizeMode='cover' style={styles.img}>
        <CustomInput
          label="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Enter your email"
        />
        <CustomInput
          label="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Enter your password"
          secureTextEntry
        />
        <CustomInput
          label="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          placeholder="Confirm your password"
          secureTextEntry
        />
        <CustomButton title="Sign Up" onPress={handleSignup} style={styles.btn} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    opacity: 0.9,
  }
});

export default SignUpScreen;
