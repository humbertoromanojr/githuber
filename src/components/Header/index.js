import React from 'react';
import {
  Text, View, TouchableOpacity, StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';
import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />

    <View style={styles.left}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <TouchableOpacity onPress={() => {}}>
      <Icon nsmr="exchange" size={16} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
