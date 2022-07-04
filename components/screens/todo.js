import * as React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Header } from './header'



export default function Todo() {

  


  return (
    <SafeAreaView>
      <Header />

      <Text>Todo </Text>
    </SafeAreaView>
  );
}
