import { View, Text } from "react-native";
import React from "react";

const EditTodoScreen = (props) => {
  const [todos, setTodos] = useContext(TodosContext);
  const [todo, setTodo] = useState(props.route.params.item.title);
  const editTodo = () => {
    const idx = todos.findIndex(
      (todo) => todo.id == props.route.params.item.id
    );
    setTodos([
      ...todos.slice(0, idx),
      { id: props.route.params.item.id, title: todo },
      ...todos.slice(idx + 1),
    ]);
    setTodo("");
  };

  return (
    <View>
      <Navigation navigation={props.navigation} />
      <Text>You can add new todo here</Text>
      <TextInput value={todo} onChangeText={setTodo} placeholder="edit todo" />
      <Button title="EditTodo" onPress={editTodo} />
    </View>
  );
};

export default EditTodoScreen;
