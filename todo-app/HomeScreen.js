import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import React, { useContext } from "react";
import Navigation from "./Navigation";
import { TodosContext } from "./TodosContext";
import TodoItem from "./TodoItem";

const HomeScreen= ({ navigation }) => {
  const [todos, setTodos] = useContext(TodosContext);

  const deleteTodo = (itemId) => {
    setTodos(todos.filter((todo) => todo.id !== itemId));
  };
  return (
    <View style={styles.container}>
      <Text>TODOS</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
           <TodoItem item={item} deleteTodo={deleteTodo} navigation={navigation} />
          )}
        ></FlatList>
      </View>
      <Navigation navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-between",
    padding: 10
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
export default HomeScreen
