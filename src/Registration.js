import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

function RegistrationScreen({ route, navigation }) {
    const [nameInput, setNameInput] = useState('');
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [DOBInput, setDOBInput] = useState('');
  
    const handleRegistration = async () => {
        const name = nameInput;
        const username = usernameInput;
        const password = passwordInput;
        const email = emailInput;
        const DOB = DOBInput;
        const { url } = route.params;


        const response = await axios.post(`${url}/register`,{
            name: name,
            username: username,
            password: password,
            email: email,
            DOB: DOB,
        },{
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(response.data)
        navigation.navigate('Login', {url});
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Registration Screen</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={nameInput}
          onChangeText={setNameInput}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={usernameInput}
          onChangeText={setUsernameInput}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={passwordInput}
          onChangeText={setPasswordInput}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={emailInput}
          onChangeText={setEmailInput}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="DOB"
          value={DOBInput}
          onChangeText={setDOBInput}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default RegistrationScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#c4c4c4',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#1976d2',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    link: {
      color: '#1976d2',
      fontSize: 16,
    },
  });