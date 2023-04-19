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
    // TODO: Call the registration API endpoint with the user data
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
