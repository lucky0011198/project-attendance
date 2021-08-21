import * as React from 'react';
import { WebView } from 'react-native-webview';

  export default function Login(){
    return (
      <WebView
      source={{ uri: 'https://lucky-good-boy.herokuapp.com/login' }}
      mixedContentMode="compatibility"
      javaScriptEnabled
      domStorageEnabled
      thirdPartyCookiesEnabled
      sharedCookiesEnabled
      originWhitelist={['*']}
      useWebKit
    />
    );
  }
