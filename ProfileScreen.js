import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogOut = () => {
    // Navigate to the login screen or handle the logout logic
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={() => { /* settings logic */ }}>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>
      <Image
        ssource={require('./assets/b.jpg')} // Replace with your image URL
        style={styles.profileImage}
      />
      <Text style={styles.name}>James Martin</Text>
      <Text style={styles.jobTitle}>Senior Graphic Designer</Text>
      <View style={styles.followInfo}>
        <Text style={styles.followText}>121 Friends</Text>
        <Text style={styles.followText}>12 Unread Messages</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Email</Text>
        <Text style={styles.infoContent}>james012@gmail.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Mobile</Text>
        <Text style={styles.infoContent}>1234567891</Text>
      </View>
      {/* Add other info sections like Twitter, Behance, Facebook, etc. */}
      <TouchableOpacity style={styles.logOutButton} onPress={handleLogOut}>
        <Text style={styles.logOutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0f32', // Dark background color
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#162447', // Dark blue tone for header
    paddingHorizontal: 10,
    paddingTop: 50, // Adjust according to your status bar height
    paddingBottom: 10,
  },
  backArrow: {
    fontSize: 18,
    color: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  settingsIcon: {
    fontSize: 24,
    color: '#fff',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 4,
    borderColor: '#162447', 
  },
  name: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff', 
  },
  jobTitle: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#8899b7', 
    marginBottom: 10,
  },
  followInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    
  },
  followText: {
    fontSize: 16,
    color: 'white', 
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#1f4068', 
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#162447', 
  },
  infoTitle: {
    color: '#8899b7', 
    marginBottom: 5,
  },
  infoContent: {
    fontSize: 16,
    color: '#fff', 
  },
  logOutButton: {
    backgroundColor: '#e43f5a',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  logOutText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default ProfileScreen;
