import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter+1)
  }

  return (
    <View style={styles.container}>
      <Button title='Press the button' onPress={(increase)}/>
      <Text>{counter}</Text>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
