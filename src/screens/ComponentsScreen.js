import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myname = 'My name is Ulan';
    return (
        <View>
            <Text style={styles.textStyle} >Getting started with React Native!</Text>
            <Text>{myname}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

export default ComponentsScreen;