import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const TodoItem = ( {item, deleteTodo, navigation} ) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}
        onLongPress={() => {
          navigation.navigate("EditTodo", { item });
        }}
      >
        {item.title}
      </Text>
      <Button title="Delete" onPress={() => deleteTodo(item.id)} />
    </View>
  );
}
const styles = StyleSheet.create({

  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 10
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default TodoItem