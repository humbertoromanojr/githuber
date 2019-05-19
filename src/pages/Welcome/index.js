import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native';

import styles from './styles';

class Welcome extends Component {
  state = {
    userName: '',
  };

  signIn = () => {};

  render() {
    const { userName } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#444a5a" />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>
          Para continuar precisamos que digite o seu usuário do Github.
        </Text>

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
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;
