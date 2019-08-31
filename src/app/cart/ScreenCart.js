import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, ActivityIndicator } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

import Constanta from '../../res/Constant'
import { Styles, Color } from '../../res/Styles'


class ScreenCart extends Component {
  render() {
    return (
      <View style={[Styles.container, {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
      }]}>

        {/* List Menu */}
        <View style={[Styles.content, Styles.cardSimpleContainer, {
          backgroundColor: Color.whiteColor,
          width: '100%',
          flex: 7,
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginBottom: 5
        }]}>
          <View style={{ height: '100%', width: '100%' }}>
            <Text style={[Styles.hurufKonten, {
              fontSize: 17,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 5
            }]}>List Menu dari Kategori {this.state.initNameCategory}</Text>

              <FlatList
                data={this.props.Menu.dataItem}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity style={[Styles.cardSimpleContainer, {
                    backgroundColor: Color.accentColor,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    padding: 5,
                    margin: 5,
                    height: 100,
                    flexDirection: 'row',
                    position: 'relative'
                  }]}
                    onPress={() => alert('a')}
                  >
                    {false ?
                      <IconAntDesign
                        name='star'
                        size={30}
                        color='yellow'
                        style={{
                          position: 'absolute',
                          right: 10,
                          top: 10
                        }}
                      ></IconAntDesign>
                      : false}

                    <Image source={{ uri: item.image }} style={{ width: 100, height: '100%', marginRight: 20 }}></Image>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={[Styles.hurufKonten, {
                        fontSize: 15,
                        fontWeight: 'bold',
                        textAlign: 'center'
                      }]}>
                        {item.name}</Text>
                      <Text style={[Styles.hurufKonten, {
                        fontSize: 17,
                        fontWeight: 'bold',
                        textAlign: 'left'
                      }]}>
                        Rp.{item.price}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            }
          </View>
        </View>


      </View>
    )
  }
}
const mapStateToProps
export default connect(mapStateToProps)(ScreenCart)