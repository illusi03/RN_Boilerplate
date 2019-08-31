import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'

import { Styles, Color } from '../../res/Styles'
import { CosEdit, CosButton } from '../../components/Components'
import { addTransaction } from '../../_actions/Transaction'

class ScreenLogin extends Component {
  state = {
    textTblNumber: 'Kosong'
  }
  aksiChangeText = (text) => {
    this.setState({
      textTblNumber: text
    })
  }
  aksiSubmit = async () => {
    await AsyncStorage.setItem('noMeja', `${this.state.textTblNumber}`)
    //Tambah Data table transaction (Just a tableNumber)
    await this.props.dispatch(addTransaction({
      tableNumber: this.state.textTblNumber,
      isPaid:false
    }))
    await AsyncStorage.setItem('idTransaction', `${this.props.Transaction.dataItem.id}`)
    await this.props.navigation.navigate('StackPrivate')
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
          <View style={{ width: 250, marginTop: 10 }}>
            <CosEdit
              label='Nomor Meja'
              placeholder='Masukan Nomor Mejanya'
              keyboardType='numeric'
              onChangeText={this.aksiChangeText}
            />
          </View>
          <View style={{ width: '100%', marginTop: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1, marginHorizontal: 5 }}>
              <CosButton label='Submit' onPress={this.aksiSubmit} />
            </View>
          </View>

        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    Transaction: state.Transaction
  }
}

export default connect(mapStateToProps)(ScreenLogin)