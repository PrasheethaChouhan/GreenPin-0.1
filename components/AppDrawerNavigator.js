import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {HomeScreen} from '../screens/HomeScreen'
import CustomSideBarMenu  from './CustomSideBarMenu';
import {ChatScreen} from '../screens/ChatScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import CardsScreen from '../screens/CardsScreen';
import PlantATreeScreen from '../screens/PlantATreeScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : HomeScreen
    },
  Chats : {
    screen : ChatScreen
  },
  Notification : {
    screen : NotificationScreen
  },
  CardsScreen :{
    screen: CardsScreen
  },
  PlantATree : {
    screen : PlantATreeScreen
  },
  Setting : {
    screen : SettingScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
