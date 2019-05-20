import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, StatusBar, AsyncStorage,
} from 'react-native';

import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';
import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  signOut = async () => {
    const { navigation } = this.this.props;

    await AsyncStorage.clear();

    navigation.navigate('Welcome');
  };

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.left}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="exchange" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);
