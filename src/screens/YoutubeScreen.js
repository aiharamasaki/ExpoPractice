import React from 'react';
import { View, Image } from 'react-native';

class YoutubeScreen extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={require('../elements/youtubelist.png')}
          style={{ width: '100%', height: undefined, aspectRatio: 1 }}
        />
      </View>
    );
  }
}

export default YoutubeScreen;
