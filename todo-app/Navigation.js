import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Navigation = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text
          onPress={() => props.navigation.navigate("Home")}
          style={styles.text}
        >
          Home
        </Text>
      </View>
      <View style={styles.item}>
        <Text
          onPress={() => props.navigation.navigate("NewTodo")}
          style={styles.text}
        >
          New Todo
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
  },
  item: {
    flex: 1,
    borderColor: "grey",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "indianred"
  },
  text: {
    flex: 1,
    textAlignVertical: "center"
  }
});

export default Navigation;
