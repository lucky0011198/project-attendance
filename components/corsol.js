import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {
  Div,
  ThemeProvider,
  Button,
  Image,
  Badge,
  Icon,
  Input,
  Header,
  Host,
  Fab,
  Portal,
} from 'react-native-magnus';

import {
  Feather,
  MaterialCommunityIcons,
  Foundation,
  AntDesign,
  Entypo,
} from '@expo/vector-icons';

export default class Corsol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Notice',
          text: 'Text 1',
          icon:'bell'
          
        },
        {
          title: 'Present',
          text: 'Text 2',
          icon:'user-check'
        },
        {
          title: 'Absent',
          text: 'Text 3',
          icon:'user-x'
        },
        {
          title: 'Totle student',
          text: 'Text 4',
          icon:'users'
        },
        {
          title: 'Atendance average',
          text: 'Text 5',
          icon:'edit'
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        shadow="xl"
        style={{
          flexDirection: 'row',
          backgroundColor: '#90cdf4',
          borderRadius: 5,
          height: 120,
          padding: 30,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <View style={{ width: 200, height: 50 }}>
          <Text style={{ fontSize: 20, color: 'white' }}>{item.title}</Text>
          <View style={{ width: 200, height: 50 }}>
            <Text>{item.text}</Text>
          </View>
        </View>
         <View style={{ width: 60, height: 60 , justifyContent: 'center',
                  alignItems: 'center',}}>
          <Text style={{ fontSize: 20, color: 'white'}}><Feather name={item.icon} size={40} color="black" /></Text>
        </View>
        
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: 100,
        }}>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={350}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}
