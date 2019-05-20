import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import './config/ReactotronConfig';

import Routes from './routes';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  componentDidMount() {
    const userName = await AsyncStorage.getItem('@Githuber:userName')

    this.setState({
      userChecked: true,
      /**
       * !! transforma em true se existir, senão fica falso
       *
       * !! true if it exists, otherwise false
       * */
      userLogged: !!userName
    })
  }

  render() {
    return <Routes />;
  }
}
