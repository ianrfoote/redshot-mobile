import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/register', {
        username: username,
        email: email,
        password: password
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
};
  
const styles = StyleSheet.create({
form: {
    marginTop: 50,
    marginHorizontal: 20,
},
input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
},
});
  