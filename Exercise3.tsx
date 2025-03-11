import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Input from './Components/Input';
import Title from './Components/Title';
import Button from './Components/Button';

const [Username, setUsername] = useState('');
const [Pasword, setPasword] = useState('');

const onSubmit = () => {
  console.log(Username, Pasword);
};

const App = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.container}>
          <Title title="Welcome" />
          <Input
            label="Username"
            placeholder="Masukan Username anda"
            onChangeText={e => setUsername(e)}
          />
          <Input
            label="Pasword"
            placeholder="Masukan Pasword anda"
            onChangeText={e => setPasword(e)}
            secureTextEntry={true}
          />
          <Button buttonText="Login" color="blue" onPress={onSubmit} />
          <Button buttonText="Google" color="red" onPress={onSubmit} />
          <Button buttonText="IG" color="black" onPress={onSubmit} />
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
  inputContainer: {
    marginBottom: 15,
  },
});
