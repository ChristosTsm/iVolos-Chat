import React from 'react';
import { View, Text, Image } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export type ChatListItemProps = {
    chatRoom : ChatRoom
}



const ChatListItem = ( props : ChatListItemProps ) => {
    const { chatRoom } = props;
    const colorScheme = useColorScheme();
    
    const user = chatRoom.users[1];

    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image style={styles.avatar} source={{ uri: user.imageUri }} />
            </View>
            <View style={styles.midContainer}>
                <Text style={[styles.username,{ color: Colors[colorScheme].text }]}>{user.name}</Text>
                <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.lastMessage,{ color: Colors[colorScheme].text }]}>{chatRoom.lastMessage.content}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={[styles.date,{ color: Colors[colorScheme].tint }]}>{chatRoom.lastMessage.createdAt}</Text>
            </View>
        </View>
    )

}

export default ChatListItem;