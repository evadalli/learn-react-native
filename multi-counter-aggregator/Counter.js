import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

export default function Counter(props) {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter+1);
        props.setCounters(curr => curr+1) 
    }

    const reset = () => {
        setCounter(0);
        props.setCounters(curr => curr-counter)
    }

  return (
    <View>
      <Text>{counter}</Text>
      <Button title='increase' onPress={increase} />
      <Button title='reset' onPress={reset}/>
      
    </View>
  )
}