import { View, Button } from 'react-native'
import React from 'react'

export default function Decrementer({ setCounter }) {

    const decrement = () => {
        setCounter(curr => curr-1)
    }

  return (
    <View>
      <Button title='decrement' onPress={decrement}/>
    </View>
  )
}