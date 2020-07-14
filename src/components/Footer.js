import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText1} onPress={() => { this.props.navigation.navigate('TestList'); }}>診断</Text>
        <Text style={styles.footerText2} onPress={() => { this.props.navigation.navigate('Youtube'); }}>記録</Text>
        <Text style={styles.footerText3} onPress={() => { this.props.navigation.navigate('Staff'); }}>名簿</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: '#E31676',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 80,
    alignItems: 'center',
  },
  footerText1: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  footerText2: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 24,
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 28,
    paddingBottom: 28,
  },
  footerText3: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Footer;
