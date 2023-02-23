import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import React from 'react';
import CustomInput from '../../../components/CustomInput';
import { Title } from 'react-native-paper';
const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={require('../../../assets/forgotpasswordcover.jpg')} resizeMode='cover' style={styles.img}>
        <View>
          <View>
            <Title style={styles.title}>
              FORGOT  {'\n'}
              YOUR  {'\n'}
              PASSWORD?
            </Title>
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>
              Enter your email address to send a reset link to your email
            </Text>
            <CustomInput placeholder='enter your email' />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView >
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    marginBottom: 20,
    // backgroundColor: 'black',
    fontSize: 36,
    paddingVertical: 20,
    lineHeight: 36,
    // marginLeft: 45,
    color: '#FAAB78',
    fontFamily: 'PlayfairDisplay_900Black',
    alignSelf: 'center'
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#FAAB78',
    fontSize: 18,
    paddingHorizontal: 40,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay_900Black',
  },
  input: {
    marginBottom: 170,
  }
}
)

