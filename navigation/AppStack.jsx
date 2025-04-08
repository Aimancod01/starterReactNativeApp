import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Home from '../screens/Home';
import Log from '../screens/Log';
import Chat from '../screens/Chat';
import More from '../screens/More';

import HomeIcon from '../assets/icons/home.svg';
import HomeActiveIcon from '../assets/icons/homeActive.svg';
import LogIcon from '../assets/icons/log.svg';
import LogActiveIcon from '../assets/icons/logActive.svg';
import ChatIcon from '../assets/icons/chat.svg';
import ChatActiveIcon from '../assets/icons/chatActive.svg';
import MoreIcon from '../assets/icons/menu.svg';
import MoreActiveIcon from '../assets/icons/menuActive.svg';

function AppStack() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            if (route.name === 'Home') {
              return focused ? <HomeActiveIcon /> : <HomeIcon />;
            } else if (route.name === 'Log') {
              return focused ? <LogActiveIcon /> : <LogIcon />;
            } else if (route.name === 'Chat') {
              return focused ? <ChatActiveIcon /> : <ChatIcon />;
            } else if (route.name === 'More') {
              return focused ? <MoreActiveIcon /> : <MoreIcon />;
            }
          },
          headerShown: false,
          tabBarStyle: {
            height: 55,
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Log" component={Log} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  );
}

export default AppStack;
