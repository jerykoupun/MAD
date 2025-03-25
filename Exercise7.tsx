import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserCard from './Components/UC/index';

const Restapi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then(response => setUsers(response.data.data));
  }, []);

  return (
    <View style={styles.container}>
      a<Text style={styles.text}>User List</Text>
      <ScrollView>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Restapi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
});
