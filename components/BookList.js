import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookList = ({ books }) => {
  const navigation = useNavigation();

  const handleBookPress = (book) => {
    navigation.navigate('BookDetails', { book });
  }

  return (
    <View>
      {books.map(book => (
        <View key={book.id} style={styles.bookContainer}>
          {book.thumbnail ? (
            <Image source={{ uri: book.thumbnail }} style={styles.thumbnail} />
          ) : (
            <View style={styles.noThumbnail}>
              <Text>No thumbnail</Text>
            </View>
          )}
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>{book.title}</Text>
            {book.authors && <Text style={styles.bookAuthors}>{book.authors.join(', ')}</Text>}
            <Text style={styles.bookDescription}>{book.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5E7',
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
