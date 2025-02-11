//import core component react-native
import {Text, View, StyleSheet} from 'react-native'; // react-native itu labrary

//membuat fungsi
const App = () => {
  return (
    //JSX
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>
          Hello World, My Name is Jery Koupun, I'm Student of UK
        </Text>
      </View>

      <View style={styles.containerr}>
        <Text style={styles.titlee}>Aku suka MAD</Text>
      </View>
    </View>
  );
};

//export component (funsgi)
export default App;

//initial styleSheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 5,
    pedding: 20,
    margin: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: 'yellow',
    textAlign: 'center',
  },
  containerr: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 5,
    pedding: 20,
    margin: 20,
    borderRadius: 50,
  },
  titlee: {
    fontSize: 50,
    fontWeight: '800',
    color: 'yellow',
    textAlign: 'center',
  },
});
