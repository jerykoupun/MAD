import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({label, placeholder, onChangeText, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="grey"
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});
