import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  const {
    navigation
  } = props;

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Image screen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Counter screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Color screen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Square screen"
        onPress={() => navigation.navigate('Square')}
      />

    </View>
  )
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
