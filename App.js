import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import ScreenA from './Screens/ScreenA';
import ScreenB from './Screens/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createDrawerNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Screen_2'
        drawerType="back"
        screenOptions={{
          drawerActiveTintColor: '#629',
          drawerType: "back",
          swipeEdgeWidth: 300,
          overlayColor: 'black',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#763'
          },
          headerTintColor: '#fff'

        }}
      >
        <Stack.Screen name='Screen_1' component={ScreenA}
          options={{
            title: ' Flipkart',
            drawerIcon: (focussed) => (
              <FontAwesome5
                name='btc'
                size={focussed ? 25 : 10}
              />
            )
          }}
        />
        <Stack.Screen name='Screen_2' component={ScreenB}
          options={{
            title: ' Amazon',
            drawerIcon: (focussed) => (
              <FontAwesome5
                name='btc'
                size={focussed ? 25 : 10}
              />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;






// async stroage code


// import