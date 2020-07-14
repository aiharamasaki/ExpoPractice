import React from 'react';
import { View, Image } from 'react-native';

import Footer from '../components/Footer';

class YoutubeScreen extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={require('../elements/youtubelist.png')}
          onPress={() => { this.props.navigation.navigate('Youtube7'); }}
        />
        <Footer navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default YoutubeScreen;
