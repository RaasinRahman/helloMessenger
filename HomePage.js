import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// Sample data
const conversations = [
  {
    id: '1',
    name: 'Garen Sahakian',
    avatar: 'https://via.placeholder.com/40',
    subject: 'Whats up bro!',
    time: 'Today',
  },
  {
    id: '2',
    name: 'Sean Lattimore',
    avatar: 'https://via.placeholder.com/40',
    subject: 'Yo did you figure out why the code wasn’t working?',
    time: 'Yesterday',
    
  },{
    id: '3',
    name: 'Jordan Smith',
    avatar: 'https://via.placeholder.com/40',
    subject: 'Hey, are we still meeting tomorrow?',
    time: '5 min ago',
  },
  
  {
    id: '4',
    name: 'Casey Johnson',
    avatar: 'https://via.placeholder.com/40',
    subject: 'Loved the pictures from the trip!',
    time: '2 hours ago',
  },{

    id: '3',
    name: 'Alexa Rodriguez',
    avatar: 'https://via.placeholder.com/40',
    subject: 'Can you send me the report by tonight?',
    time: '1 hour ago',
  },
  {
    id: '4',
    name: 'Samuel Green',
    avatar: 'https://via.placeholder.com/40',
    subject: 'Sundays game was epic!',
    time: '3 hours ago',
  },
  {
    id: '5',
    name: 'Jamie Laurens',
    avatar: 'https://via.placeholder.com/40',
    subject: 'Do you want to grab lunch tomorrow?',
    time: 'Today',
  },
  {
    id: '6',
    name: 'Morgan McCarthy',
    avatar: 'https://via.placeholder.com/40',
    subject: 'Final reminder: Appointment at 10 AM',
    time: 'Yesterday',
  }
  // ... more conversations
];

const HomePage = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor="#1A1A2E" barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaTop} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Inbox</Text>
        </View>
        <FlatList
          data={conversations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.chatItem}
              onPress={() => navigation.navigate('Chat', { name: item.name })}
            >
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.chatDetails}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatSubject}>{item.subject}</Text>
              </View>
              <Text style={styles.chatTime}>{item.time}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaTop: {
    backgroundColor: '#1A1A2E', // Dark blue color to match the header and footer
  },
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background for the main content area
  },
  header: {
    backgroundColor: '#1A1A2E', // Dark blue header background
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E6E6E6', // Light grey text for better contrast
  },
  chatItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333', // Darker line for item separation
    backgroundColor: '#121212', // Dark background for each chat item
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  chatDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E6E6E6', // Light grey text for better contrast
  },
  chatSubject: {
    fontSize: 14,
    color: '#A0A0A0', // Slightly lighter grey for the subject
  },
  chatTime: {
    fontSize: 12,
    color: '#A0A0A0', // Slightly lighter grey for the time
  },
  footer: {
    backgroundColor: '#1A1A2E', // Dark blue footer background
    padding: 10,
  },
  fab: {
    backgroundColor: '#0A3D62', // Dark blue for the FAB
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    alignSelf: 'flex-end', // Align the button to the end
    margin: 10,
  },
  fabIcon: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomePage;
