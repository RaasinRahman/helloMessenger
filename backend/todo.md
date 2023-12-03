User Profile
1. profilePic
2. username
3. name
4. email
5. bio
6. chat-sessions list

:getUserById(Number)
:createUser(UserProfile)
:updateUser(Number, UserProfile)


ChatSession
1. participantList
2. messageList
3. chatSessionId

:getChatsForUser(Number)
:addToChatSession(Message)
:updateParticipantList(Number)


Messgae
1. createdAt
2. fromUser
3. messageText

:addMessageToChatSession(Message)
:

