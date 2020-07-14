import React from 'react';
import { StyleSheet, View } from 'react-native';

import TestList from '../components/TestList';
import Footer from '../components/Footer';

class TestListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TestList navigation={this.props.navigation} />
        <Footer navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default TestListScreen;
