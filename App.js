import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTittle}>ひくラジ</Text>
          </View>
        </View>

        <View style={styles.testList}>
          <View style={styles.testListItem}>
            <Text style={styles.testDate}>2020.00.00 ひくラジ #N 出題</Text>
            <Text style={styles.testTitle}>ワイン</Text>
            <Text style={styles.testBotton}>診断する</Text>
          </View>

          <View style={styles.testListItem}>
            <Text style={styles.testDate}>2020.00.00 ひくラジ #N 出題</Text>
            <Text style={styles.testTitle}>重大な決断</Text>
            <Text style={styles.testBotton}>診断する</Text>
          </View>

          <View style={styles.testListItem}>
            <Text style={styles.testDate}>2020.00.00 ひくラジ #N 出題</Text>
            <Text style={styles.testTitle}>待ち合わせ</Text>
            <Text style={styles.testBotton}>診断する</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
  testList: {
    width: '100%',
    flex: 1,
  },
  testListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  testTitle: {
    fontSize: 24,
    marginBottom: 4,
    paddingTop: 8,
    paddingBottom: 8,
  },
  testDate: {
    fontSize: 12,
    color: '#a2a2a2'
  },
  testBotton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
    width: 75,
    marginLeft: 250,
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#E31676',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset:{ width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTittle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

});
