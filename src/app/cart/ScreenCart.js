import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, ActivityIndicator } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

import IconFa from 'react-native-vector-icons/FontAwesome5'
import Constanta from '../../res/Constant'
import { Styles, Color } from '../../res/Styles'
import { getTransaction } from '../../_actions/Transaction'


//transactionOrder/:transactionId

class ScreenCart extends Component {
  state = {
    tableNumber: ''
  }
  getNomorTable = async () => {
    let noMejaNya = await AsyncStorage.getItem('idTransaction');
    await this.setState({
      tableNumber: noMejaNya
    })
    this.props.dispatch(getTransaction(this.state.tableNumber))
  }
  componentDidMount() {
    this.getNomorTable()
  }
  render() {
    return (
      <View style={[Styles.container, {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }]}>

        {/* List Menu */}
        <View style={[Styles.content, Styles.cardSimpleContainer, {
          backgroundColor: Color.whiteColor,
          width: '100%',
          marginBottom: 5,
          flex: 1
        }]}>
          <Text style={[Styles.hurufKonten, {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 5
          }]}>
            Daftar Pesanan (Menu)
          </Text>

          {/* Divider */}
          <View
            style={{
              borderBottomColor: Color.darkPrimaryColor,
              borderBottomWidth: 2,
              width: '100%',
              marginVertical: 5,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center'
            }}
          />


          {this.props.Transaction.isLoading ?
            <ActivityIndicator></ActivityIndicator>
            :
            <FlatList
              data={this.props.Transaction.dataItem.orders}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={[Styles.cardSimpleContainer, {
                  backgroundColor: Color.accentColor,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 5,
                  margin: 5,
                  marginVertical: 20,
                  flexDirection: 'row',
                  position: 'relative',
                  height: 100,
                  flex:1
                }]}
                >
                  <TouchableOpacity>
                    <IconFa name='minus-square' size={23} style={{
                      paddingRight: 10,
                      paddingLeft: 10
                    }}></IconFa>
                  </TouchableOpacity>

                  <Image source={{ uri: item.menu.image }} style={{
                    width: 100,
                    height: '100%',
                    marginRight: 20
                  }}></Image>
                  <View style={{ flexDirection: 'column',flex:1}}>
                    <Text style={[Styles.hurufKonten, {
                      fontSize: 15,
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }]}>
                      {item.menu.name}</Text>
                    <Text style={[Styles.hurufKonten, {
                      fontSize: 17,
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }]}>
                      Rp. {item.menu.price}</Text>
                  </View>
                  <TouchableOpacity>
                    <IconFa name='plus-square' size={23} style={{
                      paddingRight: 10,
                      paddingLeft: 10
                    }}></IconFa>
                  </TouchableOpacity>
                  <View style={{
                    position: 'absolute',
                    right: -0,
                    top: -15,
                    width: 30,
                    height: 30,
                    backgroundColor: Color.whiteColor,
                    borderRadius: 50,
                    borderColor: Color.darkPrimaryColor,
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.qty}</Text>
                  </View>
                </View>
              )}
            />
          }
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
export default connect(mapStateToProps)(ScreenCart)