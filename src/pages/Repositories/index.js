import React, { Component } from 'react';
import {
  View, Text, AsyncStorage, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import api from '~/services/api';

import Header from '~/components/Header';
import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
  };

  async componentDidMount() {
    const userName = await AsyncStorage.getItem('@Githuber:userName');
    const response = await api.get(`/users/${userName}/repos`);

    this.setState({ data: response.data, loading: false });
  }

  renderList = () => <Text>Lista</Text>;

  render() {
    const { loading } = this.state;

    return (
      <View>
        <Header title="Repositórios" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
