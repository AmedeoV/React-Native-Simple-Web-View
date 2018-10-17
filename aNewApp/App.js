import React, { Component } from 'react';
import { View, WebView, StyleSheet }

from 'react-native'

const SimpleWebView = () => {
    return (
      <WebView
        source={{uri: 'https://github.com/avertullo86/React-Native-Simple-Web-View'}}
        style={{marginTop: 20}}
      />
    );
}

export default SimpleWebView;