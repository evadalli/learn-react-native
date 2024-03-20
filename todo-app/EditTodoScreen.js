import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, {useContext, useState} from "react";
import Navigation from "./Navigation";
import { TodosContext } from "./TodosContext";


const EditTodoScreen = ({navigation, route}) => {
  const item = route.params.item;
  const [todos, setTodos] = useContext(TodosContext);
  const [todo, setTodo] = useState(item.title);
  const editTodo = () => {
    const idx = todos.findIndex(
      (todo) => todo.id == item.id
    );
    setTodos([
      ...todos.slice(0, idx),
      { ...item, title: todo },
      ...todos.slice(idx + 1),
    ]);
    setTodo("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>You can edit here</Text>
        <TextInput
          style={styles.text}
          value={todo}
          onChangeText={setTodo}
          placeholder="edit todo"
        />
        <Button title="Save" onPress={editTodo} />
      </View>
      <Navigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-between",
    padding: 10
  },
  item: {
    flex: 1,
    rowGap: 20

  },
  text: {
    fontSize: 30
  }
});

export default EditTodoScreen;
