import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BookPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.bookPageHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.appTitle}>Chapter 1</Text>

        <TouchableOpacity>
          <FontAwesome name="ellipsis-h" size={26} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.thePlaingContent}>
          Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summary
        </Text>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="font" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="comment" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="angle-left" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="angle-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  bookPageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  appTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  thePlaingContent: {
    color: 'white',
    paddingVertical: 10,
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#rgba(91, 71, 223, 0.562)',
    opacity: 0.9,
  },
});

export default BookPage;
