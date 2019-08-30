import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from "react-navigation"
import IconFa from 'react-native-vector-icons/FontAwesome5'

import { Styles, Color } from '../res/Styles'
import ScreenHome from '../app/home/ScreenHome'
import ScreenAuth from '../app/auth/ScreenAuth'

const BotNavPublic = createBottomTabNavigator(
  {
    Beranda: {
      screen: ScreenHome,
      navigationOptions: {
        tabBarLabel: 'Beranda',
        tabBarIcon: ({ tintColor }) => (
          <IconFa name="home" color={tintColor} size={25} />
        )
      }
    },
    Autentikasi: {
      screen: ScreenAuth,
      navigationOptions: {
        tabBarLabel: 'Autentikasi',
        tabBarIcon: ({ tintColor }) => (
          <IconFa name="user-circle" color={tintColor} size={25} />
        )
      }
    }
  }, {
    tabBarOptions: {
      activeTintColor: Color.whiteColor,
      inactiveTintColor: Color.lightPrimaryColor,
      style: {
        backgroundColor: Color.darkPrimaryColor,
        borderTopWidth: 1,
        borderColor: Color.deviderColor,
        shadowOffset: { width: 6, height: 6 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 6,
        paddingTop: 10
      }
    }
  }
);

export default StackPublic = createStackNavigator(
  {
    BotNavPublic
  }, {
    initialRouteName: "BotNavPublic",
    headerMode: 'none'
  }
);
