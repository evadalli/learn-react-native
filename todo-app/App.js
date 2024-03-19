
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewTodoScreen from "./NewTodoScreen";
import HomeScreen from "./HomeScreen";
import { TodosContext } from "./TodosContext";
import { useState } from "react";
import  EditTodoScreen from "./EditTodoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
   
      <TodosContext.Provider value={[todos, setTodos]}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Home" }}
            />
            <Stack.Screen
              name="NewTodo"
              component={NewTodoScreen}
              options={{ title: "NewTodo" }}
            />
            <Stack.Screen
              name="EditTodo"
              component={EditTodoScreen}
              options={{ title: "EditTodo" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TodosContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    borderColor: "red",
    borderWidth: 5,
    borderStyle: "solid",
    backgroundColor: "red"
  },
});
