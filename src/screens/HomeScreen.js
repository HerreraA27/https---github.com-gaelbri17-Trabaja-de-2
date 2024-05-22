import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const studentsData = [
  { id: 1, name: 'Garbi', carnet: '20221234', photo: require('c:\Users\Tatiana Herrera\Downloads\Garbi.png.jpeg') },
  { id: 2, name: 'Roberto Pelusa', carnet: '20225678', photo: require('c:\Users\Tatiana Herrera\Downloads\Pelusa.png.jpeg') }
];

const StudentsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {studentsData.map(student => (
        <Card key={student.id} style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Card.Cover source={student.photo} style={styles.imagen} />
            <Title style={styles.title}>{student.name}</Title>
            <Paragraph style={styles.text}>Carnet safasdfsa: {student.carnet}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    marginTop: 130,
    marginBottom: 0,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#000',
  },
  imagen: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardContent: {
    alignItems: 'center',
  },
  title: {
    color: '#fff', 
    marginBottom: 10, 
  },
  text: {
    color: '#fff', 
  },
});

export default StudentsScreen;
