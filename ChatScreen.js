    // ChatScreen.js
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
    } from 'react-native';
    import { useNavigation } from '@react-navigation/native';

    const ChatScreen = ({ route }) => {
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const { name } = route.params;
    const flatListRef = useRef();

    useEffect(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    const sendMessage = () => {
        if (inputText.trim()) {
        const newMessage = { id: Date.now().toString(), text: inputText };
        setMessages([...messages, newMessage]);
        setInputText('');
        }
    };

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 20}
        >
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{name}</Text>
        </View>
        <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.messageBubble}>
                <Text style={styles.messageText}>{item.text}</Text>
            </View>
            )}
            style={styles.messageList}
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
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#1A1A2E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        left: 15,
        justifyContent: 'center',
        zIndex: 10,
        paddingTop: 50
    },
    backIcon: {
        color: '#E6E6E6',
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerTitle: {
        color: '#E6E6E6',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 50
    },
    messageList: {
        flex: 1,
        padding:5,
    },
    messageBubble: {
        padding: 15,
        backgroundColor: '#2A2A40',
        marginVertical: 5,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
    messageText: {
        color: '#FFFFFF',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#1A1A2E',
        alignItems: 'center', // Align items vertically in the center
        marginBottom: -3,
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
        backgroundColor: '#0A3D62',
        borderRadius: 25,
    },
    sendButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    });

    export default ChatScreen;
