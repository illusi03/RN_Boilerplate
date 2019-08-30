import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from "react-navigation";
import IconFa from 'react-native-vector-icons/FontAwesome5'
import IconAnt from 'react-native-vector-icons/AntDesign'

import { Styles, Color } from '../res/Styles'
import ScreenHome from '../app/home_private/ScreenHome'
import ScreenChat from '../app/chat/ScreenChat'
import ScreenProfile from '../app/profile/ScreenProfile'

const BotNavPrivate = createBottomTabNavigator(
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
    Chat: {
      screen: ScreenChat,
      navigationOptions: {
        tabBarLabel: 'Pesan',
        tabBarIcon: ({ tintColor }) => (
          <IconAnt name="wechat" color={tintColor} size={25} />
        )
      }
    },
    Profil: {
      screen: ScreenProfile,
      navigationOptions: {
        tabBarLabel: 'Profil',
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

export default StackPrivate = createStackNavigator(
  {
    BotNavPrivate
  }, {
    initialRouteName: "BotNavPrivate",
    headerMode: 'none'
  }
);
