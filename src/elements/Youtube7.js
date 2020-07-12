import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Youtube7 extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.youtube.com/playlist?list=PLtvMoSDz2SAdywZzz4sRIyOLvhVzoKpO1'}}
        style={{marginTop: 20}}
        scalesPageToFit={true}
      />
    );
  }
}

export default Youtube7;