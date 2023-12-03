// LogIn.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      style={styles.container}
      // Replace with your own image
      source={require('./assets/b.jpg')}
    >
      <Text style={styles.welcomeBack}>Welcome Back</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          containerStyle={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          containerStyle={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          secureTextEntry
        />
      </View>
      <Button
        title="Log in"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        // Implement your login logic here
        onPress={() => console.log('Log in pressed')}
      />
      <TouchableOpacity
        // Implement your forgot password logic here
        onPress={() => console.log('Forgot Password pressed')}
      >
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.orText}>Or</Text>
        <Button
          title="Sign up"
          type="clear"
          titleStyle={{ color: 'white' }}
          // Implement your sign up navigation logic here
          onPress={() => console.log('Sign Up pressed')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  welcomeBack: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 5,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#0000FF', // Your button color
    borderRadius: 10,
  },
  forgotPasswordText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 15,
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  orText: {
    color: 'white',
    marginBottom: 10,
  },
});

export default LogIn;
