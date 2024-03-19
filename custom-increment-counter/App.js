import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text, setText] = useState("");
  const [counter, setCounter] = useState(text)

  const updateCounter= () => {
    setCounter(Number(counter) + Number(text));
    setText("")
  }

  const updateCounterTwice = () => {
    setCounter((curr) => Number(curr) + Number(text));
    setCounter((curr) => Number(curr) + Number(text));
    setText("")
  }

  const clearCounter = () => {
    setCounter(0)
  }

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <TextInput value={text} keyboardType='numeric' onChangeText={setText} placeholder='Please increment the counter...'/>
      <Button title='Send number' onPress={updateCounter}/>
      <Button title='Send number*2' onPress={updateCounterTwice} />
      <Button title='Clear' onPress={clearCounter} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
