import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from '../utils/slides';
import { styles } from '../styles/IntroTourStyles';
import { Companies, inputString } from '../utils/InputFile';

const validCompanies = Companies(inputString).filter((a) => {
  if (a.isValid) {
    return true;
  }
  return false;
});
const inValidCompanies = Companies(inputString).filter((a) => {
  if (!a.isValid) {
    return true;
  }
  return false;
});

export default class Home extends React.Component {
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
        <ScrollView style={styles.slideWrapper}>
          <View>
            <Card>
              <Card.Title>COMPANIES TO APPLY FOR</Card.Title>
              <Card.Divider />
              {validCompanies.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Text style={styles.name}>{u.company}</Text>
                    <Card.Divider />
                  </View>
                );
              })}
              <Card.Title>COMPANIES NOT TO APPLY FOR</Card.Title>
              <Card.Divider />
              {inValidCompanies.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Text style={styles.name}>{u.company}</Text>
                    <Card.Divider />
                  </View>
                );
              })}
            </Card>
          </View>
        </ScrollView>
      );
    }
    return <AppIntroSlider renderItem={this.renderItem} data={slides} onDone={this.onDone} />;
  }
}
