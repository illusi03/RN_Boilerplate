import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

import { Styles, Color } from '../../res/Styles'
class CompTouchable extends Component {
  render() {
    return (
      <TouchableOpacity style={[Styles.cardSimpleContainer,{
        backgroundColor: Color.accentColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin:5
      }]}
      onPress={this.props.onPress}
      >
        <Text style={[Styles.hurufKonten, {
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center'
        }]}>
          {this.props.namaKategori}</Text>
      </TouchableOpacity>
    )
  }
}
export default CompTouchable