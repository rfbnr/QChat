import React, { useState, useEffect, useCallback } from "react";
import {
  GiftedChat,
  Send,
  Bubble,
  InputToolbar,
} from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";

const MessageDisplay = ({ userName, avatar, message }) => {
  const [messages, setMessages] = useState([{ pending: true }]);

  const initialMessages = [
    {
      _id: Math.round(Math.random() * 1000000),
      text: message,
      createdAt: new Date(Date.UTC(2022, 11, 20, 17, 20, 0)),
      user: {
        _id: 2,
        name: userName,
        avatar: avatar,
      },
      received: true,
    },
    {
      _id: 3,
      text: "Hi! I work from home today!",
      createdAt: new Date(Date.UTC(2023, 0, 8, 13, 20, 0)),
      user: {
        _id: 1,
        name: "Developer",
      },
      image: "https://placeimg.com/960/540/any",
      received: true,
    },
  ];

  useEffect(() => {
    setMessages(initialMessages.reverse());
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const customtInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: COLORS.secondaryWhite,
          borderTopColor: COLORS.secondaryWhite,
          borderTopWidth: 2,
          padding: 8,
        }}
      />
    );
  };

  const renderSend = (props) => (
    <Send
      {...props}
      containerStyle={{
        height: 45,
        width: 45,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: COLORS.primary,
        marginRight: 8,
        marginBottom: 1,
      }}
    >
      <Ionicons name="ios-send" size={20} color={COLORS.white} />
    </Send>
  );

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: COLORS.primary,
          padding: 3,
          margin: 4,
        },
        left: {
          backgroundColor: COLORS.secondaryPrimary,
          padding: 3,
          margin: 4,
        },
      }}
      textStyle={{
        right: {
          color: COLORS.white,
        },
      }}
    />
  );

  return (
    <GiftedChat
      scrollToBottom
      alwaysShowSend={false}
      messages={messages}
      minInputToolbarHeight={70}
      renderBubble={(props) => renderBubble(props)}
      renderSend={(props) => renderSend(props)}
      showUserAvatar={true}
      onSend={(messages) => onSend(messages)}
      renderInputToolbar={(props) => customtInputToolbar(props)}
      user={{
        _id: 1,
        name: "Developer",
        pending: true,
      }}
      textInputProps={{
        selectionColor: COLORS.black,
      }}
      textInputStyle={{
        borderRadius: 26,
        borderWidth: 1.5,
        borderColor: COLORS.black,
        backgroundColor: COLORS.white,
        marginRight: 10,
        marginLeft: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    />
  );
};

export default MessageDisplay;
