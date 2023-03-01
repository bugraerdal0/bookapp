import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const BookList = ({ books }) => {
  return (
    <View style={styles.container}>
      {books.map(book => (
        <View style={styles.bookContainer} key={book.id}>
          <Image source={{ uri: book.thumbnail }} style={styles.bookCover} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bookContainer: {
    margin: 8,
  },
  bookCover: {
    width: 100,
    height: 150,
  },
});

export default BookList;
