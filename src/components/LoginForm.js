import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  _handlePressLogin = () => {
    if (this.props.onLogin) {
      const { username, password } = this.state;
      this.props.onLogin(username, password);
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => this.setState({ password: text })}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={this._handlePressLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 32,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    fontSize: 18,
    height: 48,
    width: 240,
    padding: 8,
  },
  button: {
    width: 120,
    height: 56,
    marginTop: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
});

export default LoginForm;