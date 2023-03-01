import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import { signOut } from "firebase/auth";
import { auth } from '../../../firebase';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { api_key } from '../../../config';
import BookList from '../../../components/BookList';
import { SearchBar } from 'react-native-elements';

const url = 'https://www.googleapis.com/books/v1/volumes?q=';

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('love');

  useEffect(() => {
    if (search) {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${api_key}`)
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
    }
  }, [search]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log('SIGNED OUT');
      navigation.navigate('Welcome');
    }).catch((error) => {
      console.log('SIGN OUT ERROR:', error);
    });
  };

  const updateSearch = (search) => {
    setSearch(search);
  };

  const filteredBooks = books.filter(book => {
    return book.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <SafeAreaView style={styles.root}>
      <View>
        <SearchBar
          placeholder="Search for a book title"
          onChangeText={updateSearch}
          value={search}
          containerStyle={styles.inputcover}
          inputContainerStyle={styles.searchInput}
          style={styles.searchBar}
        />
      </View>
      <View style={styles.bookListContainer}>
        <BookList books={filteredBooks} />
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
    backgroundColor: '#fff',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    height: 50, // or any other value you prefer
  },


  searchInput: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  searchBar: {
    height: 50,
  },
  bookListContainer: {
    flex: 1,
  },
});

export default HomeScreen;