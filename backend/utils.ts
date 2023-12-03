import {gunInstance} from "./gunInstance";

type UserProfile = {
    userId: Number;
    profilePic: String;
    username: String;
    name: String;
    email: String;
    bio: String;
    followers: Number;
    chatList: any;
}

type Message = {
    createdAt: Date;
    fromUser: Number;
    messageText: String;
}

type ChatSession = {
    chatSessionId: Number;
    participantList: Number[];
    messageList: Message[];
}

export const testMessage = ()=>{
    gunInstance.get("messages").put({
        message:"hi",
    });
    
    gunInstance.get("messages").map().on(m=>{
        console.log(m);
    })
}


export const createUser = (user:UserProfile) => {
    gunInstance.get('users').get(user.userId.toString()).put(user).on(()=>{
        console.log("added user successfully!");
    });
}

export const getUserById = (userId:Number) => {
    gunInstance.get('users').get(userId.toString()).once(u => {
        console.log(u);
    })
}

export const updateUserById = (userId:Number, user:UserProfile) => {
    gunInstance.get('users').get(userId.toString()).put(user).on(()=>{
        console.log("updated user successfully!");
    });
}


export const deleteUserById = (userId:Number)=>{
    gunInstance.get('users').get(userId.toString()).put(null).on((s)=>{
        console.log("deleted user successfully");
    });
}

//chat-sessions
export const createNewChat = (participantList: Number[], chatSession:ChatSession) => {
    participantList.map((userId)=>{
        gunInstance.get('chat-sessions').get(chatSession.chatSessionId.toString()).put(chatSession);
        gunInstance.get('chat-sessions').get(chatSession.chatSessionId.toString()).get('participantList').set(userId);
        gunInstance.get('users').get(userId.toString()).get('chatList').set(chatSession.chatSessionId);
        console.log("done!")
    })
}

export const getChatById= (chatSessionId:Number) =>{
    gunInstance.get('chat-sessions').get(chatSessionId.toString()).once(c => {
        console.log(c);
    })
} 