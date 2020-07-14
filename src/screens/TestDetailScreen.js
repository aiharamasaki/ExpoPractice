import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Footer from '../components/Footer';

class TestDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.testHeader}>
          <Text style={styles.testHeaderDate}>2020.00.00 ひくラジ #N 出題</Text>
          <Text style={styles.testHeaderTitle}>「ワイングラスにワインを注ぐ」シーンを想像してください。あなたが真っ先に感じたのはなに？</Text>
        </View>

        <View style={styles.testSelect}>
          <Text style={styles.testSelectText} onPress={() => { this.props.navigation.navigate('TestAnswer'); }}>選択肢A ワインの色</Text>
          <Text style={styles.testSelectText}>選択肢B ワインを注ぐ音</Text>
          <Text style={styles.testSelectText}>選択肢C ワインの香り</Text>
        </View>

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
  testHeader: {
    height: 150,
    backgroundColor: '#A4A4A4',
    justifyContent: 'center',
    padding: 15,
    marginTop: 0.7,
  },
  testHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  testHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  testSelect: {
    padding: 15,
    marginTop: 10,
    fontSize: 20,
  },
  testSelectText: {
    fontSize: 20,
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default TestDetailScreen;
