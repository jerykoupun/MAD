//import core component react-native
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native'; // react-native itu labrary

//membuat fungsi
const App = () => {
  return (
    //JSX
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          Hello World, My Name is Jery Koupun, I'm Student of UK
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.subTitle}>From Directory</Text>
          <Image style={styles.img1} source={require('./Assets/singa.jpg')} />
          <Text style={styles.subTitle}>From public</Text>
          <Image
            style={styles.img1}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Text style={styles.subTitle}>From Base64</Text>
          <Image
            style={styles.img1}
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
          />
        </View>
      </ScrollView>
    </>
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
    color: 'green',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 50,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
  },
  img1: {
    width: 300,
    height: 300,
    margin: 20,
  },
});
