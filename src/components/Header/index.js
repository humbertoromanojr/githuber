import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <TouchableOpacity onPress={() => {}} />
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
