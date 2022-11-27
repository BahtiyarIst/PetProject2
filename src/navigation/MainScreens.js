import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeSvg from '../assets/tabImages/HomeSvg';
import HistoryRatingSvg from '../assets/tabImages/historyRatingSvg';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: 'Главная',
          tabBarIcon: ({focused}) => <HomeSvg focused={focused} />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          headerShown: false,
          tabBarLabel: 'Настройки',
          tabBarIcon: ({focused}) => <HistoryRatingSvg focused={focused} />,
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

export default function MainScreens() {
  return <MyTabs />;
}
