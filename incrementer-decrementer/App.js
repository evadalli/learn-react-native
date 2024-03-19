import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Incrementer from './Incrementer';
import Decrementer from './Decrementer';

export default function App() {

  //lifting state app 

  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Incrementer setCounter={setCounter}/>
      <Decrementer setCounter={setCounter}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
