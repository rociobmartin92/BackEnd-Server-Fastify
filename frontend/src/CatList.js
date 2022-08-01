import {View, Text, Image, Button, StyleSheet} from 'react-native';
import React from 'react';

const CatList = ({data, deleteData}) => {
  const {image, origin, race, _id} = data;

  console.log(image);

  return (
    <View style={styles.view}>
      <View>
        <Text style={styles.text}> {race} </Text>

        <Image
          style={styles.image}
          source={{
            uri: `${image}`,
          }}
        />

        <Text style={styles.label}> {origin} </Text>
      </View>
      <Button
        title="Edit"
        onPress={() => console.log('edit')}
        marginTop={10}
        color="#846a5b"
      />
      <Button
        title="Delete"
        onPress={() => deleteData(_id)}
        marginTop={10}
        color="#846a5b"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  image: {width: 150, resizeMode: 'contain', height: 150},
  text: {fontSize: 22, color: 'black', marginTop: 15},
  label: {fontSize: 18, color: 'black'},
});

export default CatList;
