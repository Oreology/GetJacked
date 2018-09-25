import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default class TemplateView extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <Text>Hello there</Text>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  }
})
