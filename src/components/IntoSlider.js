import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from '../utils/slides';
import { styles } from '../styles/IntroTourStyles';

export class IntoSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRealApp: false,
    };
  }

  renderItem = ({ item }) => {
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
      return <Text>heeeeeeey</Text>;
    }
    return <AppIntroSlider renderItem={this.renderItem} data={slides} onDone={this.onDone} />;
  }
}

export default IntoSlider;
