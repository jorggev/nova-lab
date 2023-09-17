import { StyleSheet, TextInput as NewTextInput, View } from "react-native";
import React from "react";

const TextInput = ({name, onHandleChangeName}) => {
  return (
    <View>
      <NewTextInput
        style={styles.input}
        placeholder="Nueva tarea"
        value={name}
        onChangeText={onHandleChangeName}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 12,
  },
});
