import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Appbar from './src/components/Appbar';
import TestList from './src/components/TestList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Appbar />
        <TestList />

        <View style={styles.footer}>
          <Text style={styles.footerText}>診断</Text>
          <Text style={styles.footerText}>記録</Text>
          <Text style={styles.footerText}>名簿</Text>
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

  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:'#E31676',
    flexDirection:'row',
    justifyContent: 'center',
    height:80,
    alignItems:'center',
  },
  
  footerText: {
    color:'white',
    fontWeight:'bold',
    alignItems:'center',
    fontSize:24,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

});
