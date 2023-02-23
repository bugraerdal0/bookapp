import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomButton from '../../../components/CustomButton';
import { signOut } from "firebase/auth";
import { auth } from '../../../firebase';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log('SIGNED OUT');
      navigation.navigate('Welcome');
    }).catch((error) => {
      console.log('SIGN OUT ERROR:', error);
    });
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.inputcover}>
        <CustomButton title="Sign Out" onPress={handleSignOut} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  inputcover: {
    alignContent: 'center',
    marginTop: 60,
    paddingVertical: 16,
  },
});

