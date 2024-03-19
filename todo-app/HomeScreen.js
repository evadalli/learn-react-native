import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import React, { useContext } from "react";
import Navigation from "./Navigation";
import { TodosContext } from "./TodosContext";
import { disableErrorHandling } from "expo";

const HomeScreen= (props) => {
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
            <View style={styles.item}>
              <Text
                onLongPress={() => {
                  props.navigation.navigate("EditTodo", { item });
                }}
              >
                {item.title}
              </Text>
              <Button title="delete" onPress={() => deleteTodo(item.id)} />
            </View>
          )}
        ></FlatList>
      </View>
      <Navigation navigation={props.navigation} />
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
