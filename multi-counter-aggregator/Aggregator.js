import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Counter from './Counter'

export default function Aggregator() {

    const [counters, setCounters] = useState(0)

  return (
    <View>
      <Text>{counters}</Text>
      <Counter setCounters={setCounters} />
      <Counter setCounters={setCounters} />
    </View>
  );
}