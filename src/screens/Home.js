import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
];
const styles = StyleSheet.create({});

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Card>
          <Card.Title>CARD WITH DIVIDER</Card.Title>
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>
      </View>
    );
  }
}
