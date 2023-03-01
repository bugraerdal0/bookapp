import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import { signOut } from "firebase/auth";
import { auth } from '../../../firebase';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { api_key } from '../../../config';
import BookList from '../../../components/BookList';
import { SearchBar } from 'react-native-screens';

const url = 'https://www.googleapis.com/books/v1/volumes?q=harry&key=';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`${url}${api_key}`)
      .then(response => {
        const booksData = response.data.items.map(book => {
          const { id, volumeInfo } = book;
          const { title, authors, description, imageLinks } = volumeInfo;
          const thumbnail = imageLinks?.thumbnail;

          return {
            id,
            title,
            authors,
            description,
            thumbnail
          }
        });

        setBooks(booksData);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }, []);

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
      <SearchBar style={styles.inputcover}>
      </SearchBar>
      <View style={styles.bookListContainer}>
        <BookList books={books} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  inputcover: {
    alignContent: 'center',
    marginTop: 60,
    paddingVertical: 24,
    backgroundColor: '#AA5656'
  },
  bookListContainer: {
    flex: 1,
  },
});

export default HomeScreen;

