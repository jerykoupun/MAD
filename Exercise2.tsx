import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise2 = () => {
  return (
    <>
      <View>
        <StatusBar backgroundColor={'#fafafa'} barStyle={'dark-content'} />
      </View>
      <View>
        <ImageBackground
          source={require('./Assets/Background2.jpg')}
          style={styles.backgroudimage}
          imageStyle={{borderRadius: 9}}>
          <View>
            <Text style={styles.title}>MY PORTOFOLIO</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.img} source={require('./Assets/Myfoto.jpg')} />
        <Text style={styles.youngjer}>Young Jerr</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground
            source={require('./Assets/Background3.jpg')}
            style={styles.backgroudimage2}
            imageStyle={{borderRadius: 2}}>
            <View>
              <Text style={styles.information}>Name : Koupun, Jery Marten</Text>
              <Text style={styles.information}>
                I am a student at the Faculty of Computer Science, Universitas
                Klabat, majoring in Information Systems. I have expertise in
                business planning and enjoy logical and critical thinking.
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground
            source={require('./Assets/Background4.jpg')}
            style={styles.backgroudimage2}
            imageStyle={{borderRadius: 2}}>
            <View>
              <Text style={styles.information2}>Born: June 10, 2006</Text>
              <Text style={styles.information2}>
                I was born in the city of Ambon, in a village called Layeni. I
                was born during the daytime. However, since I moved to Manado in
                2010, I have never returned to my birthplace.
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground
            source={require('./Assets/Background5.jpg')}
            style={styles.backgroudimage2}
            imageStyle={{borderRadius: 2}}>
            <View>
              <Text style={styles.information}>Education</Text>
              <Text style={styles.information}>
                I started my education at GMIM 85 Wori Kindergarten. After that,
                I continued my elementary education at GMIM 85 Wori Elementary
                School. I then pursued my junior high school education at Advent
                6 Panda Junior High School. After graduating, I continued to
                vocational high school at SMK Negeri 1 Wori.
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground
            source={require('./Assets/Background7.jpg')}
            style={styles.backgroudimage2}
            imageStyle={{borderRadius: 2}}>
            <View>
              <Text style={styles.information2}>Skills</Text>
              <Text style={styles.information2}>
                Skills I have several skills related to the field of study I am
                currently pursuing. I enjoy analysis, business planning, data
                mining, and several other areas of expertise.
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('./Assets/E-Business.jpg')}
            style={styles.img}
            imageStyle={{borderRadius: 2}}></Image>
          <Text style={styles.youngjer}>Klabat Set Up</Text>
          <Text style={styles.youngjer2}>
            Klabat Set Up is one of the E-Business projects that I created.
          </Text>
        </View>
        <View>
          <TextInput
            style={{
              elevation: 3,
              marginHorizontal: 20,
              marginTop: 20,
              borderRadius: 5,
              paddingLeft: 10,
              borderWidth: 2,
              borderColor: '#76d1ff',
            }}
            placeholder="Bagaimana tanggapan anda?"
          />
        </View>
        <View>
          <TextInput
            style={{
              elevation: 3,
              marginHorizontal: 20,
              marginTop: 20,
              borderRadius: 5,
              paddingLeft: 10,
              borderWidth: 2,
              borderColor: '#76d1ff',
            }}
            placeholder="Apa yang perlu saya kembangkan?"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonitem}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  backgroudimage: {
    marginHorizontal: 20,
    marginTop: 10,
    padding: 15,
  },
  backgroudimage2: {
    marginHorizontal: 20,
    marginTop: 50,
    padding: 15,
  },
  img: {
    width: 180,
    height: 180,
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 250 / 2,
    borderWidth: 2,
    borderColor: '#76d1ff',
  },
  youngjer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  youngjer2: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  information: {
    margin: 10,
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',
  },
  information2: {
    margin: 10,
    fontSize: 16,
    color: 'white',
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#76d1ff',
    marginVertical: 10,
    paddingVertical: 12,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
  },
  buttonitem: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
