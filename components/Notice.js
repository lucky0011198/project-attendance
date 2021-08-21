import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {


    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 300,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>

        )
    }

    render() {
        return (
          
                <WebView
      source={{ uri: 'https://lucky-good-boy.herokuapp.com/api' }}
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
}
