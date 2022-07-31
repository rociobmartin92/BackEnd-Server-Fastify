import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';

const initialState = {
  race: '',
  origin: '',
  image: '',
};

const Home = () => {
  const [race, setRace] = useState('');
  const [origin, setOrigin] = useState('');
  const [images, setImages] = useState('');

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      setImages(image);
    });
  };

  const submitData = () => {
    const newData = {
      race: race,
      origin: origin,
      image: images.path,
    };
    console.log(newData);
    axios
      .post('http://localhost:3000/cats', newData, {
        'Content-Type': 'text/plain',
      })
      .then(response => console.log(response))
      .catch(e => console.log(e));
  };

  const getData = () => {
    axios
      .get('http://localhost:3000/cats')
      .then(response => console.log(response))
      .catch(e => console.log(e));
  };

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Create New Cat</Text>
      <View>
        <Text style={styles.label}>Race:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setRace}
          value={race}
          placeholder="Insert a new race of cats"
        />
        <Text style={styles.label}>Origin:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setOrigin}
          value={origin}
          placeholder="Insert origin country of the cat"
        />
        <Button
          color="#98789b"
          style={styles.button}
          title="Insert an Image"
          onPress={() => uploadImage()}
        />
        <View style={styles.button}>
          <Button
            title="Submit"
            onPress={() => submitData()}
            marginTop={10}
            color="#2E4053"
          />
        </View>
        <View style={styles.buttonTwo}>
          <Button
            title="See al cats"
            onPress={() => getData()}
            marginTop={10}
            color="#2E4053"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: 270,
    marginVertical: 10,
  },
  title: {fontSize: 22, color: 'black', marginTop: 15},
  label: {fontSize: 18, color: 'black'},
  view: {alignItems: 'center'},
  button: {width: 80, marginTop: 15},
  buttonTwo: {width: 110, marginTop: 15},
});

export default Home;
