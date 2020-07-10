import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class TestList extends React.Component {
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
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
    color: '#a2a2a2',
  },
  testBotton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
    width: 80,
    position: 'absolute',
    right: 0,
    marginTop: 40,
    marginRight: 10,
    alignItems: 'center',
  },
});

export default TestList;
