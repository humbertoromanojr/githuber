import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    userName: '',
    loading: false,
    error: false,
  };

  checkUserExists = async (userName) => {
    const user = await api.get(`/users/${userName}`);

    return user;
  };

  saveUser = async (userName) => {
    await AsyncStorage.setItem('@Githuber:userName', userName);
  };

  signIn = async () => {
    const { userName } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(userName);
      await this.saveUser(userName);

      navigation.navigate('User');
    } catch (err) {
      this.setState({ loading: false, error: true });
      console.tron.log('Usuário inexistente!');
    }
  };

  render() {
    const { userName, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#444a5a" />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>
          Para continuar precisamos que digite o seu usuário do Github.
        </Text>

        {error && <Text style={styles.error}>Usuário inexistente!</Text>}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={userName}
            onChangeText={text => this.setState({ userName: text })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;
