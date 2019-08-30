import React, { Component } from 'react'
import { View, ActivityIndicator,Text } from 'react-native'

export default class StackCheck extends Component {
  state = {
    isLogin: false
  }
  componentDidMount() {
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    try {
      if (this.state.isLogin) {
        this.props.navigation.navigate('StackPrivate')
      } else {
        this.props.navigation.navigate('StackPublic')
      }
    } catch (e) { }
  }
  render() {
    return (
      <View>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold'
        }}>HARAP TUNGGU...</Text>
        <ActivityIndicator size={50} color="#0000ff" />
      </View>
    )
  }
}