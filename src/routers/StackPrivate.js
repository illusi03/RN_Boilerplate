import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from "react-navigation";
import IconFa from 'react-native-vector-icons/FontAwesome5'
import IconAnt from 'react-native-vector-icons/AntDesign'

import { Styles, Color } from '../res/Styles'
import ScreenHome from '../app/home_private/ScreenHome'
import ScreenViewbill from '../app/viewbill/ScreenViewbill'
import ScreenCart from '../app/cart/ScreenCart'

export default StackPrivate = createStackNavigator(
  {
    ScreenHome,
    ScreenViewbill,
    ScreenCart
  }, {
    initialRouteName: "ScreenHome",
    headerMode: 'none'
  }
);
