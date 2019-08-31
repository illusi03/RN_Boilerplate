import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity} from 'react-native'

import { Styles, Color } from '../../res/Styles'

class ScreenChat extends Component {
  render() {
    return (
      <View style={[Styles.container, {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
      }]}>
        <View style={[Styles.content, Styles.cardSimpleContainer, {
          backgroundColor: Color.whiteColor,
          width: '100%',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }]}>
          <Text style={[Styles.hurufKonten, {
            fontSize: 20,
            fontWeight: 'bold',
          }]}>Billing (Kedai Dumbways)</Text>

          {/* Divider */}
          <View
            style={{
              borderBottomColor: Color.darkPrimaryColor,
              borderBottomWidth: 2,
              width: '100%',
              marginVertical: 5
            }}
          />

          {/* List Menu (Status , Name dan Price) */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={[Styles.hurufKonten, {
              fontSize: 14,
              fontWeight: 'bold',
              flex: 1
            }]}>WAITING</Text>
            <Text style={[Styles.hurufKonten, {
              fontSize: 14,
              fontWeight: 'bold',
              flex: 1
            }]}>Tomat</Text>
            <Text style={[Styles.hurufKonten, {
              fontSize: 14,
              fontWeight: 'bold',
              flex: 1
            }]}>Rp.25.000</Text>
          </View>

          {/* Divider */}
          <View
            style={{
              borderBottomColor: Color.darkPrimaryColor,
              borderBottomWidth: 2,
              width: '100%',
              marginVertical: 5
            }}
          />

          {/* List Menu (Status , Name dan Price) */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <TouchableOpacity style={[Styles.cardSimpleContainer, {
              backgroundColor: Color.accentColor,
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: 5,
              margin: 5,
              height: '100%',
              flexDirection: 'row'
            }]}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={[Styles.hurufKonten, {
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center'
              }]}>
                GO BACK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.cardSimpleContainer, {
              backgroundColor: Color.accentColor,
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: 5,
              margin: 5,
              height: '100%',
              flexDirection: 'row'
            }]}
              onPress={() => alert('Mantap')}
            >
              <Text style={[Styles.hurufKonten, {
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center'
              }]}>
                CALL BILL</Text>
            </TouchableOpacity>
          </View>


        </View>
      </View>
    )
  }
}
export default ScreenChat