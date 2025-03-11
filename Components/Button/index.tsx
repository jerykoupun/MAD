import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({buttonText, color = 'blue', onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button(color)} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color, // Warna Instagram
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  }),
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
