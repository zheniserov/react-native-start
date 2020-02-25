import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'friend #1', age: 12 },
        { name: 'friend #2', age: 15 },
        { name: 'friend #3', age: 13 },
        { name: 'friend #4', age: 18 },
        { name: 'friend #5', age: 32 },
        { name: 'friend #6', age: 64 },
        { name: 'friend #7', age: 113 }
    ]

    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
            return <Text style={styles.textStyle} >{item.name}-{item.age}</Text>
            }}
        />
    )
}
const styles = StyleSheet.create({
    textStyle: {
        marginVertical:50
    }
});

export default ListScreen;