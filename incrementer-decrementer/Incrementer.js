import { View, Button } from 'react-native'
import React from 'react'

export default function Incrementer( { setCounter }) {

    const increment = () => {
        setCounter(curr => curr+1)
    }


  return (
    <View>
      <Button title='increment' onPress={increment}/>
    </View>
  )
}