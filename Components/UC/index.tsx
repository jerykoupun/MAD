import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const UC = ({user}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: user.avatar}} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>
          <Text style={styles.bold}>{user.last_name}</Text> {user.first_name}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

export default UC;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
  },
});
