import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookList = ({ books }) => {
  const navigation = useNavigation();

  const handleBookPress = (book) => {
    navigation.navigate('BookDetails', { book });
  }

  return (
    <View style={styles.container}>
      {books.map((book) => (
        <TouchableOpacity key={book.id} onPress={() => handleBookPress(book)}>
          <View style={styles.bookContainer}>
            <Image source={{ uri: book.thumbnail }} style={styles.thumbnail} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.author}>{book.authors.join(', ')}</Text>
              <Text style={styles.description} numberOfLines={2}>{book.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  bookContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  thumbnail: {
    width: 80,
    height: 120,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  author: {
    color: 'gray',
    fontSize: 14,
  },
  description: {
    fontSize: 14,
  },
});

export default BookList;
