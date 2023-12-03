import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi Raasin! How was your day?', type: 'received', timestamp: new Date().getTime() },
    
  ]);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef();

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputText,
        type: 'sent',
        timestamp: new Date().getTime(),
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={[
      styles.messageBubble, 
      item.type === 'sent' ? styles.sentBubble : styles.receivedBubble
    ]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Garen Sahakian</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.messageList}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type a message..."
            placeholderTextColor="#A0A0A0"
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000', 
  },
  header: {
    flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#1A1A2E',
        alignItems: 'center',
        justifyContent: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    backgroundColor: '#000000',
  },
  messageList: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: '#000000',
  },
  messageBubble: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  sentBubble: {
    backgroundColor: '#162447', 
    alignSelf: 'flex-end', 
  },
  receivedBubble: {
    backgroundColor: '#0A3D62', 
    alignSelf: 'flex-start', 
  },
 
  messageText: {
    color: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#121212',
    marginBottom: -52
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
    color: '#E6E6E6',
    backgroundColor: '#2A2A40',
   
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#162447',
    borderRadius: 25,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  

  });

    export default ChatScreen;
