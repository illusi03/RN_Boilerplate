import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

import { Styles, Color } from '../../res/Styles'
import { getUser } from '../../_actions/User'

class ScreenHome extends Component {
  componentDidMount() {
    this.props.dispatch(getUser())
  }
  render() {
    return (
      <View style={[Styles.container, {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
      }]}>
        <View style={[Styles.content, Styles.cardSimpleContainer, {
          backgroundColor: Color.whiteColor,
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }]}>
          <Text style={[Styles.hurufKonten, {
            fontSize: 20,
            fontWeight: 'bold',
          }]}>INI HALAMAN DEPAN PUBLIC</Text>
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    User: state.User
  }
}
export default connect(mapStateToProps)(ScreenHome)