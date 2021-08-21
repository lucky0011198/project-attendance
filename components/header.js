import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import Constants from 'expo-constants';

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  ScrollView,
  ImageBackground,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {
  Div,
  ThemeProvider,
  Image,
  Badge,
  Input,
  Header,
  Host,
  Button,
  Fab,
  Icon,
  Portal,
  
} from 'react-native-magnus';

import { WebView } from 'react-native-webview';
// You can import from local files


//expo icons...........
import {
  Feather,
  MaterialCommunityIcons,
  Foundation,
  AntDesign,
  Entypo,
} from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
  export default function Head(){
    return (
      <Stack.Screen
          name="Notes"
          component={NotesScreen}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <Div row>
                <Button
                  bg="#f7fafc"
                  h={50}
                  w={50}
                  onPress={() => navigation.push('Setting')}
                  ml="md">
                  <AntDesign name="setting" size={20} color="black" />
                </Button>
                <Button
                  bg="#f7fafc"
                  h={50}
                  w={50}
                  ml="md"
                  onPress={() => navigation.push('Profile')}>
                  <Feather name="user" size={20} color="black" />
                </Button>
                <Button
                  bg="#f7fafc"
                  h={50}
                  w={50}
                  ml="md"
                  onPress={() => navigation.push('Logout')}>
                  <Entypo name="log-out" size={20} color="black" />
                </Button>
              </Div>
            ),
          })}
        />
     
    );
  }
