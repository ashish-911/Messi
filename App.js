
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
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createMaterialTopTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Screen_1') {
              iconName = 'atom';
              color = focused ? '#921' : ' #555';
            }
            else if (route.name === 'Screen_2') {
              iconName = 'anchor';
              color = focused ? '#921' : ' #555';
            }
            return (
              <FontAwesome5
                name={iconName}
                size={25}
                color={color}
              />
            )
          },
          tabBarActiveBackgroundColor: 'tomato',
          tabBarShowLabel: false,
          title: false,



        })}
        tabBarPosition='bottom'

      >
        <Stack.Screen name='Screen_1' component={ScreenA} options />
        <Stack.Screen name='Screen_2' component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
