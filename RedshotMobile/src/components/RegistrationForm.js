import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleUsernameChange = (username) => {
    this.setState({ username });
  }

  handleEmailChange = (email) => {
    this.setState({ email });
  }

  handlePasswordChange = (password) => {
    this.setState({ password });
  }

  handleSubmit = () => {
    const { username, email, password } = this.state;

    fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 200 || data.status === 201) {
        // Display a success message to the user
        Alert.alert('Registration successful');
      } else {
        // Display an error message to the user
        Alert.alert('Registration failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  render() {
    const { username, email, password } = this.state;

    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={this.handleUsernameChange}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={this.handleEmailChange}
        />
        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={this.handlePasswordChange}
        />
        <Button
          title="Register"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default RegistrationForm;
