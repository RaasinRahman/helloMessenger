import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';


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
    subject: 'Yo did you figure out why the code wasnt working?',
    time: 'Yesterday',
  },

];

const HomePage = ({ navigation }) => { 
  return (
    <>
      <StatusBar backgroundColor="#6200ee" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Inbox</Text>
      </View>

      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={conversations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.chatItem}
              onPress={() => navigation.navigate('Chat', { name: item.name })} // Navigate to ChatScreen with the name parameter
            >
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatSubject}>{item.subject}</Text>
              </View>
              <Text style={styles.chatTime}>{item.time}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0' 
  },
  header: {
    backgroundColor: '#006D77',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 55, 
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 10,
  },
  chatItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatSubject: {
    fontSize: 14,
    color: '#555',
  },
  chatTime: {
    fontSize: 12,
    color: '#999',
  },
  footer: {
    backgroundColor: '#006D77',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  fab: {
    backgroundColor: '#66A7AD',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    margin: 10,
  },
  fabIcon: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomePage;