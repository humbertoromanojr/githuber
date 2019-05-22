import React from 'react';

import { View, Text, Image } from 'react-native';

import styles from '../styles';

const OrganizationItem = ({ organization }) => (
  <View style={styles.container}>
    <Image source={{ uri: organization.avatar_url }} style={styles.avatar} />
    <Text style={styles.title}>{organization.login}</Text>
  </View>
);

export default OrganizationItem;
