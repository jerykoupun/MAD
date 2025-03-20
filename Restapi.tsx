import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';

const Restapi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data));
  }, []);

  return (
    <View>
      <Text style={styles.text}>RestAPI</Text>
      {users.map(item => (
        <Text style={{fontSize: 20}}>{item.name}</Text>
      ))}
    </View>
  );
};

export default RestAPI;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  item: {
    fontSize: 20,
  },
});
