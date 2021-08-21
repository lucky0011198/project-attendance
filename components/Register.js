import * as React from 'react';
import { WebView } from 'react-native-webview';

  export default function Register(){
    return (
      <WebView
      source={{ uri: 'https://lucky-is-good-boy.herokuapp.com/register' }}
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
