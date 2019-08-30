import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import { Styles, Color } from '../../res/Styles'
import { CosEdit, CosButton } from '../../components/Components'

export default class ScreenLogin extends Component {
  state = {
    textNya: 'Kosong'
  }
  aksiChange = (text) => {
    this.setState({
      textNya: text
    })
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
          height: 250,
          justifyContent: 'center',
          alignItems: 'center'
        }]}>

          <Text style={[Styles.hurufKonten, {
            fontSize: 18,
            fontWeight: 'bold',
          }]}>Harap Login Terlebih Dahulu</Text>
          <View style={{ width: 250,marginTop:10}}>
            <CosEdit label='Username'/>
          </View>
          <View style={{ width: 250,marginTop:10}}>
            <CosEdit label='Password'/>
          </View>
          <View style={{ width: '100%',marginTop:10, flexDirection:'row'}}>
            <View style={{flex:1,marginHorizontal:5}}>
              <CosButton label='Login' onPress={()=> this.props.navigation.navigate('StackPrivate')}/>
            </View>
            <View style={{flex:1,marginHorizontal:5}}>
              <CosButton label='Register' onPress={()=> alert('Register')}/>
            </View>
          </View>
          
        </View>
      </View>
    )
  }
}