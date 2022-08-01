import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import baseURL from './connectionserver/baseURL';
import CatList from './CatList';

const initialState = {
  race: '',
  origin: '',
  image: '',
};

const {height} = Dimensions.get('window');

const Home = () => {
  const [race, setRace] = useState('');
  const [origin, setOrigin] = useState('');
  const [images, setImages] = useState('');
  const [data, setData] = useState();
  const [showCats, setShowCats] = useState(false);

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
      .post(`${baseURL}cats`, newData, {
        'Content-Type': 'text/plain',
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(e => console.log(e));
  };

  const getData = () => {
    axios
      .get(`${baseURL}cats`)
      .then(response => {
        console.log(response.data);
        setData(response.data);
        setShowCats(true);
      })
      .catch(e => console.log(e));
  };

  const deleteData = () => {
    axios
      .delete(`${baseURL}cats/:id`)
      .then(response => {
        console.log(response);
      })
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
            color="#846a5b"
          />
        </View>
        <ScrollView style={styles.scroll}>
          {showCats &&
            data.map(cat => (
              <CatList key={cat._id} data={cat} deleteData={deleteData} />
            ))}
        </ScrollView>
        {showCats && (
          <Button onPress={() => setShowCats(false)} title="Close" />
        )}
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
  view: {alignItems: 'center', height: height - 100},
  button: {alignSelf: 'center', width: 80, marginTop: 20},
  buttonTwo: {marginTop: 50, borderRadius: 25, width: 270},
  scroll: {marginTop: 20, marginBottom: 10},
  width: '100%',
});

export default Home;
