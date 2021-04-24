import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import ChatRooms from "../data/ChatRooms";

import chatRooms from '../data/ChatRooms';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={ChatRooms} 
        renderItem={ ( { item } ) => <ChatListItem chatRoom={item} /> } 
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container : {
    flex: 1
  }

});
