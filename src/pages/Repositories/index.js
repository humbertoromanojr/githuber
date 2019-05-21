import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import api from '~/services/api';

import Header from '~/components/Header';

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
  };

  async componentDidMount() {
    const userName = await AsyncStorage.getItem('@Githuber:userName');
    const response = await api.get(`/users/${userName}/repos`);

    this.setState({ data: response.data });
  }

  render() {
    return (
      <View>
        <Header title="Repositórios" />
        {this.state.data.map(repo => (
          <Text>{repo.name}</Text>
        ))}
      </View>
    );
  }
}
