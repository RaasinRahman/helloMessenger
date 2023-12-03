  // App.js
  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import ProfileScreen from './ProfileScreen';
  import HomePage from './HomePage'; // make sure to create this file
  import ChatScreen from './ChatScreen';
  import LogIn from './LogIn'; // Import LogIn screen
  const Stack = createStackNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Login" component={LogIn} /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;
