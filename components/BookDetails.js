import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const BookDetails = ({ route }) => {
    const { book } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: book.thumbnail }} style={styles.image} />
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>by {book.authors}</Text>
            <Text style={styles.description} numberOfLines={50} textAlignVertical='top'>
                {book.description}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F9F5E7'
    },
    image: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 20,
        alignSelf: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    author: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
    },
});

export default BookDetails;
