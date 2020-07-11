import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ListVideo from '../elements/ListVideo';
import SingleVideo from '../elements/SingleVideo';

const YoutubeScreen = () => {
  const [toggleExample, setToggleExample] = useState(false);
  console.log(toggleExample);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setToggleExample(!toggleExample)}>
          <Text style={styles.label}>Change Example</Text>
        </TouchableOpacity>
      </View>
      {toggleExample ? (
        <View style={styles.viewContainer}>
          <ListVideo />
        </View>
      ) : (
        <View style={styles.viewContainer}>
          <SingleVideo />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 20,
  },
  label: {
    color: 'white',
  },
});

export default YoutubeScreen;
