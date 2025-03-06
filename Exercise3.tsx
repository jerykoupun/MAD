import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukan username anda"
              placeholderTextColor="grey"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukan password anda"
              placeholderTextColor="gray"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    marginBottom: 15,
  },
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
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
