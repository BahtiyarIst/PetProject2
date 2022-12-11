import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeSvg from '../assets/tabImages/HomeSvg';
import HistoryRatingSvg from '../assets/tabImages/historyRatingSvg';
import BillSvg from '../assets/tabImages/BillSvg';
import MainScreen from '../screens/MainScreen';
import SettingScreen from '../screens/SettingScreen';
import PanGestureScreen from '../screens/PanGestureScreen';
import SwipingScreen from '../screens/SwipingScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainScreen"
        options={{
          headerShown: false,
          tabBarLabel: 'Главная',
          tabBarIcon: ({focused}) => <HomeSvg focused={focused} />,
        }}
        component={MainScreen}
      />
      <Tab.Screen
        name="PanGesture"
        options={{
          headerShown: false,
          tabBarLabel: 'Спираль',
          tabBarIcon: ({focused}) => <BillSvg focused={focused} />,
        }}
        component={PanGestureScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          headerShown: false,
          tabBarLabel: 'Настройки',
          tabBarIcon: ({focused}) => <HistoryRatingSvg focused={focused} />,
        }}
        component={SettingScreen}
      />
      <Tab.Screen
        name="Swiping"
        options={{
          headerShown: false,
          tabBarLabel: 'Рычаг',
          tabBarIcon: ({focused}) => <HistoryRatingSvg focused={focused} />,
        }}
        component={SwipingScreen}
      />
    </Tab.Navigator>
  );
}

export default function MainScreens() {
  return <MyTabs />;
}
