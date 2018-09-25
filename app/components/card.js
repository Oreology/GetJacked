import React from 'react';
import CardView from 'react-native-cardview';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

  export class Cards extends React.Component{
    constructor(props){
      super(props);
    }

    <TouchableOpacity onPress={this.props.onPress}>
      <CardView
        cardElevation={8}
        cardMaxElevation={8}
        cornerRadius={25}
        style={styles.card}
      >
        <Text> {this.props.style[properties].title} </Text>
        <View>
        <Image
          style={styles.largeLogo}
          source={this.props.style[properties].imageSource}
          />
        </View>
        <Text> {this.props.style[properties].info} </Text>
      </CardView>
    </TouchableOpacity>



  }
