import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from '../utils/slides';
import { styles } from '../styles/IntroTourStyles';

const users = [
  {
    name: 'brynn',
  },
  {
    name: 'timothy',
  },
];

export default class Home extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      showRealApp: false,
    };
  }

  renderItem = ({ item }) => {
    if (item.image) {
      return (
        <ScrollView style={styles.slideWrapper}>
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
            <Image style={styles.image} source={item.image} />
          </View>
        </ScrollView>
      );
    }
    return (
      <ScrollView style={styles.slideWrapper}>
        <View style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </ScrollView>
    );
  };

  onDone = () => {
    this.setState({ showRealApp: true });
  };

  render() {
    const { showRealApp } = this.state;
    if (showRealApp) {
      return (
        <View>
          <Card>
            <Card.Title>COMPANIES TO APPLY FOR</Card.Title>
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
    return <AppIntroSlider renderItem={this.renderItem} data={slides} onDone={this.onDone} />;
  }
}
