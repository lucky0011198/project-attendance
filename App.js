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
import AssetExample from './components/AssetExample';
import Login from './components/Login';
import Register from './components/Register';
import Notice from './components/Notice';
import Corsol from './components/corsol';
import Model from './components/model';

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

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};



function HomeScreen({ navigation }) {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Host>
          <Div
            style={{
              width: '100%',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Corsol />
            <Div
           
              style={{

                flex: 1,
                backgroundColor: 'white',
                 borderRadius:10,
                 borderWidth: 0,
                 borderColor:"#bee3f8",
                width: '90%',
                height: '30%',
                padding: '2%',
                color:'white',
                justifyContent: 'center',
                
              }}>
              <Div
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#cbd5e0',
                    marginLeft: '3%',
                  }}
                />
                <View
                  style={{
                    width: '60%',
                    height: 60,
                    backgroundColor: 'white',
                    marginLeft: '5%',
                    justifyContent: 'flex-start',
                    // alignItems:"center"
                  }}>
                  <Text style={{ fontSize: 20, textAlign: 'left' }}>
                    Laxmikant varkal
                  </Text>
                  <Text style={{ fontSize: 10, textAlign: 'left' }}>
                    varkallaxmikant62@gmail.com
                  </Text>
                </View>
              </Div>
              <View
                style={{
                  width: 60,
                  height: 25,
                  alignSelf: 'flex-end',
                  backgroundColor: 'white',
                  marginRight: '5%',
                  marginTop: '2%',
                  flexDirection: 'row',
                }}>
                
                <Text>profile </Text>
                <AntDesign name="rightcircleo" size={20} color="blue" />
                
              </View>
              
            </Div>
          </Div>

          <Div
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Div style={{ flexDirection: 'row' }}>
              <Div
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  bg="purple700"
                  h={60}
                  w={60}
                  m={10}
                  onPress={() => navigation.push('Attendance')}>
                  <Feather name="edit" size={24} color="white" />
                </Button>
                <Text>Attendance</Text>
              </Div>

              <Div
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  bg="purple700"
                  h={60}
                  w={60}
                  m={10}
                  onPress={() => navigation.push('Notes')}>
                  <Foundation name="clipboard-notes" size={25} color="white" />
                </Button>
                <Text>Notes</Text>
              </Div>
              <Div
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  bg="purple700"
                  h={60}
                  w={60}
                  m={10}
                  onPress={() => navigation.push('Notice')}>
                  <Feather name="bell" size={24} color="white" />
                </Button>
                <Text>Notice</Text>
              </Div>
              <Div
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  bg="purple700"
                  h={60}
                  w={60}
                  m={10}
                  onPress={() => navigation.push('Timetable')}>
                  <MaterialCommunityIcons
                    name="timetable"
                    size={24}
                    color="white"
                  />
                </Button>
                <Text>timetable</Text>
              </Div>
            </Div>
            <Div style={{ flexDirection: 'row', marginTop: '3%' }}>
              <Div
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  bg="purple700"
                  h={60}
                  w={60}
                  m={10}
                  onPress={() => navigation.push('Calendar')}>
                  <AntDesign name="calendar" size={24} color="white" />
                </Button>
                <Text>calendar</Text>
              </Div>

              <Div
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  bg="purple700"
                  h={60}
                  w={60}
                  m={10}
                  onPress={() => navigation.push('Students')}>
                  <Feather name="users" size={24} color="white" />
                </Button>
                <Text>Students</Text>
              </Div>
              <Div
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  bg="purple700"
                  h={60}
                  w={60}
                  m={10}
                  onPress={() => navigation.push('Login')}>
                  <Entypo name="login" size={24} color="white" />
                </Button>
                <Text>Signin</Text>
              </Div>
              <Div
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Div
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Button
                    bg="purple700"
                    h={60}
                    w={60}
                    m={10}
                    onPress={() => navigation.push('Register')}>
                    <Feather name="user-plus" size={24} color="white" />
                  </Button>
                  <Text>signup</Text>
                </Div>
              </Div>
            </Div>
          </Div>

          {/* list 
          <Div m="sm" flex={1}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={friends}
              renderItem={({ item }) => (
                <>
                  <Button
                    block
                    color="white"
                    p="none"
                    mt="xl"
                    w="100%"
                    onPress={() => navigation.push(item.path)}>
                    <Div
                      p="lg"
                      flex={1}
                      bgImg={{
                        uri: item.image,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 20,
                          fontWeight: 'bold',
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 15,
                          opacity: 0.5,
                          marginTop: '2%',
                        }}>
                        McLeod Ganj is a suburb of Dharamshala in Kangra
                        district of Himachal Pradesh, India.
                      </Text>
                      <Div row mt="xl">
                        <Text style={{ color: 'white' }}>Explore</Text>
                        <Icon name="arrowright" color="white" ml="md" />
                      </Div>
                    </Div>
                  </Button>
                </>
              )}
              keyExtractor={(item) => `friend-list-item-${item.id}`}
            />
          </Div>
          <Portal>
            <Fab bg="blue600" h={55} w={55} p="sm">
              <Button
                p="none"
                bg="transparent"
                justifyContent="flex-end"
                onPress={() => navigation.push('Login')}>
                <Div rounded="sm" bg="white" p="sm">
                  <Text>Sign in </Text>
                </Div>
                <Icon
                  name="login"
                  color="black"
                  h={50}
                  w={50}
                  fontSize="4xl"
                  rounded="circle"
                  ml="md"
                  bg="white"
                />
              </Button>
              <Button
                p="none"
                bg="transparent"
                justifyC
                opacityontent="flex-end"
                onPress={() => navigation.push('Register')}>
                <Div rounded="sm" bg="white" p="sm">
                  <Text>Sign up</Text>
                </Div>
                <Icon
                  name="adduser"
                  color="black"
                  h={50}
                  w={50}
                  fontSize="4xl"
                  rounded="circle"
                  ml="md"
                  bg="white"
                />
              </Button>
            </Fab>
          </Portal>
          */}
        </Host>
      </SafeAreaView>
    </ThemeProvider>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function AttendanceScreen({ navigation }) {
  return (
    <>
      <WebView
        source={{ uri: 'https://lucky-good-boy.herokuapp.com/attendance-m' }}
        mixedContentMode="compatibility"
        javaScriptEnabled
        domStorageEnabled
        thirdPartyCookiesEnabled
        sharedCookiesEnabled
        originWhitelist={['*']}
        useWebKit
      />
      <Fab bg="blue600" h={55} w={55} p="sm">
        <Button
          p="none"
          bg="transparent"
          justifyContent="flex-end"
          onPress={() => navigation.push('Database')}>
          <Div rounded="sm" bg="white" p="sm">
            <Text>database </Text>
          </Div>
          <Icon
            name="database"
            color="black"
            h={50}
            w={50}
            fontSize="4xl"
            rounded="circle"
            ml="md"
            bg="white"
          />
        </Button>
        <Button
          p="none"
          bg="transparent"
          justifyC
          opacityontent="flex-end"
          onPress={() => navigation.push('Students')}>
          <Div rounded="sm" bg="white" p="sm">
            <Text>students_</Text>
          </Div>
          <Icon
            name="addusergroup"
            color="black"
            h={50}
            w={50}
            fontSize="4xl"
            rounded="circle"
            ml="md"
            bg="white"
          />
        </Button>
        <Button
          p="none"
          bg="transparent"
          justifyC
          opacityontent="flex-end"
          onPress={() => navigation.push('Charts')}>
          <Div rounded="sm" bg="white" p="sm">
            <Text>barcharts</Text>
          </Div>
          <Icon
            name="piechart"
            color="black"
            h={50}
            w={50}
            fontSize="4xl"
            rounded="circle"
            ml="md"
            bg="white"
          />
        </Button>
      </Fab>
    </>
  );
}

function StudentsScreen({ navigation }) {
  return (
    <WebView
      source={{ uri: 'https://lucky-good-boy.herokuapp.com/Students' }}
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
function DatabaseScreen({ navigation }) {
  return (
    <WebView
      source={{
        uri: 'https://lucky-good-boy.herokuapp.com/attendnce-Database',
      }}
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
function ChartsScreen({ navigation }) {
  return (
    <WebView
      source={{ uri: 'https://lucky-good-boy.herokuapp.com/Charts' }}
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

function NoticeScreen({ navigation }) {
  return <Notice />;
}
function TimetableScreen({ navigation }) {
  return (
    <WebView
      source={{ uri: 'https://lucky-good-boy.herokuapp.com/timetable' }}
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
function NotesScreen({ navigation }) {
  return (
    <WebView
      source={{ uri: 'https://lucky-good-boy.herokuapp.com/Notes' }}
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
function CalendarScreen({ navigation }) {
  return (
    <WebView
      source={{ uri: 'https://lucky-good-boy.herokuapp.com/Calendar' }}
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

function LoginScreen({ navigation }) {
  return <Login />;
}

function RegisterScreen({ navigation }) {
  return <Register />;
}

function ProfileScreen({ navigation }) {
  return (
    <WebView
      source={{ uri: 'https://lucky-good-boy.herokuapp.com/profile' }}
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

function SettingScreen({ navigation }) {
  return (
    <WebView
      source={{ uri: 'https://lucky-good-boy.herokuapp.com/setting' }}
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
function LogoutScreen({ navigation }) {
  return (
    <WebView
      source={{ uri: 'https://lucky-good-boy.herokuapp.com/logout' }}
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

const Stack = createStackNavigator();

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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
        <Stack.Screen
          name="Attendance"
          component={AttendanceScreen}
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
        <Stack.Screen
          name="Database"
          component={DatabaseScreen}
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
        <Stack.Screen
          name="Students"
          component={StudentsScreen}
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
        <Stack.Screen
          name="Charts"
          component={ChartsScreen}
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

        <Stack.Screen
          name="Notice"
          component={NoticeScreen}
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
        <Stack.Screen
          name="Timetable"
          component={TimetableScreen}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <Div row>
                <Button
                  bg="#f7fafc"
                  h={50}
                  w={50}
                  rounded="circle"
                  onPress={() => navigation.push('Setting')}>
                  <AntDesign name="setting" size={20} color="black" />
                </Button>
                <Button
                  bg="#f7fafc"
                  h={50}
                  w={50}
                  rounded="circle"
                  ml="sm"
                  onPress={() => navigation.push('Profile')}>
                  <Feather name="user" size={20} color="black" />
                </Button>
                <Button
                  bg="#f7fafc"
                  h={50}
                  w={50}
                  rounded="circle"
                  ml="sm"
                  onPress={() => navigation.push('Logout')}>
                  <Entypo name="log-out" size={20} color="black" />
                </Button>
              </Div>
            ),
          })}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
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
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
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
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
