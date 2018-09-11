import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';

const SERVER_URL = 'ws://localhost:3000/websocket';

class App extends Component {
  componentWillMount() {
    Meteor.connect(SERVER_URL);
    console.log()
  }
  handleAddItem() {
    console.log('TODO: Handle Add Item');
    const name = Math.floor(Math.random() * 10); //generate random number for now
    Meteor.call('Items.addOne', { name }, (err, res) => {
      console.log('Items.addOne', err, res);
    });
  }
  render() {
    return (
      <View style = { styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native + Meteor!
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.handleAddItem}>
          <Text>Add Item</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          Item Count: {this.props.count}
        </Text>
        <Text style={styles.instructions}>
          We will use this soon!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    padding: 10,
    backgroundColor: '#c5c5c5',
  },
});

export default createContainer(() => {
  Meteor.subscribe('items');
  return {
    count: Meteor.collection('items').find().length,
  };
}, App);
