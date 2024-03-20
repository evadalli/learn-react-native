import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import Navigation from "./Navigation";
import { TodosContext } from "./TodosContext";
import uuid from "react-native-uuid"


const createTodo = (title) => {
 return {id: uuid.v4(), title: title}
}

const NewTodoScreen = (props) => {
  const [todos, setTodos] = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState("");
  const addNewTodo = () => {
    setTodos([...todos, createTodo(newTodo)]);
    setNewTodo("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>You can add new todo here</Text>
        <TextInput
        style= {styles.text}
          value={newTodo}
          onChangeText={setNewTodo}
          placeholder="new todo"
        />
        <Button title="Add" onPress={addNewTodo} />
      </View>
      <Navigation navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  item: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    padding: 20,
  },
});

export default NewTodoScreen