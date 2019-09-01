import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, ActivityIndicator,ToastAndroid } from 'react-native'
import IconIon from 'react-native-vector-icons/Ionicons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'

import axios from 'axios'
import Constanta from '../../res/Constant'

import { Styles, Color } from '../../res/Styles'
import AsyncStorage from '@react-native-community/async-storage';
import CompTouchable from './CompTouchable'
import { CosButton } from '../../components/Components';
import { getMenu, getMenuWhereCategory } from '../../_actions/Menu'
import { getCategory } from '../../_actions/Category'
import { addOrder, editOrder } from '../../_actions/Order'

// getMenuWhereCategory
class ScreenHome extends Component {
  state = {
    noMeja: 0,
    idTransaction: 0,
    initNameCategory: 'Semua',
    startedMenus: [],
    toogleStarted: ''
  }
  getNoMeja = async () => {
    try {
      const noMeja = await AsyncStorage.getItem('noMeja')
      const idTransaction = await AsyncStorage.getItem('idTransaction')
      await this.setState({
        noMeja: noMeja,
        idTransaction: idTransaction
      })
    } catch (e) {
      console.log(e)
    }
  }
  clearNoMeja = async () => {
    try {
      await AsyncStorage.clear();
      await this.props.navigation.navigate('StackPublic')
    } catch (e) {
    }
  }
  aksiCategoryMenus = (categoryId, categoryName) => {
    this.props.dispatch(getMenuWhereCategory(categoryId))
    this.setState({
      initNameCategory: categoryName
    })
  }
  cekIsStartedMenus = async () => {
    const startedMenus = await AsyncStorage.getItem('startedMenus')
    await this.setState({
      startedMenus
    });
  }
  aksiAddOrderMenus = async (menuId, transactionId) => {
    //Cari data Jika isPaid false , Input Order.
    //Cek Data Transaksi (Apakah sudah STATUS PAID / BELUM)
    let transaksiData 
    let menuData 
    try{
      transaksiData = await axios.get(`${Constanta.host}/transaction/${transactionId}`)
      menuData = await axios.get(`${Constanta.host}/menu/${menuId}`)
    }catch(e){
      console.log(e)
    }
    // console.log(`Transaksi Data : ${JSON.stringify(transaksiData)}`)
    // console.log(`Menu Data : ${JSON.stringify(menuData)}`)
    // console.log(`jmlMenuData Data : ${JSON.stringify(jmlMenuDataByTrans)}`)
    

    if (!transaksiData.data.isPaid) {
      //Cek jika ada Menu yg sudah terdaftar di Order MenuId dan TransaksiId, Tambah
      //Cek Jumlah Order di setiap Transaksi
      //const jumlahSemuaMenuByTransaksi = await axios.get(`${Constanta.host}/transaction/${transactionId}`)
      const jmlMenuDataByTrans = await axios.get(`${Constanta.host}/order/transactionId/${transactionId}/menuId/${menuId}`)

      if (!jmlMenuDataByTrans.data) {
        const dataJadi = {
          menuId,
          transactionId,
          price: menuData.data.price,
          qty: 1
        }
        // console.log(`Data Belum ada : ${JSON.stringify(dataJadi)}`)
        // alert(`Berhasil Menambahkan Order`)
        ToastAndroid.show('Berhasil Menambahkan Order', ToastAndroid.SHORT);
        this.props.dispatch(addOrder(dataJadi))
      } else {
        //Ambil dulu jumlah Qty nya, lalu Tambahkan + 1
        //Patch Data Where IDOrderNya
        let idOrderNya = jmlMenuDataByTrans.data.id
        let jmlDataNya = jmlMenuDataByTrans.data.qty
        jmlDataNya = jmlDataNya + 1
        const dataJadi = {
          qty: jmlDataNya
        }
        // Counter Qty
        // console.log(`Data Sudah ada : ${jmlDataNya}`)
        // alert(`Berhasil Menambahkan Order , Jumlah : ${jmlDataNya} `)
        ToastAndroid.show(`Berhasil Menambahkan Order , Jumlah : ${jmlDataNya}`, ToastAndroid.SHORT);
        this.props.dispatch(editOrder(idOrderNya, dataJadi))
      }
    } else {
      alert('Sudah Bayar')
    }
  }
  //Tahap Percobaan
  setStartedMenus = (menuId) => {
    let arrTemporer = this.state.startedMenus
    let kosong = true;
    arrTemporer.forEach((item, index, arr) => {
      if (item.id == menuId) {
        kosong = false
      }
    })
    if (kosong) {
      //Push array where id
      arrTemporer.push(menuId)
    } else {
      //Pop array where id
      arrTemporer.pop
    }
    // const noMeja = AsyncStorage.setItem('startedMenus',this.state.startedMenus)
  }

  componentDidMount() {
    this.getNoMeja()
    this.props.dispatch(getMenu())
    this.props.dispatch(getCategory())
    // this.cekIsStartedMenus()
  }
  render() {

    return (
      <View style={[Styles.container, {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5
      }]}>
        {/* Header */}
        <View style={[Styles.content, Styles.cardSimpleContainer, {
          backgroundColor: Color.whiteColor,
          width: '100%',
          height: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
          flexDirection: 'row'
        }]}>
          <Text>Meja #{this.state.noMeja}</Text>
          <Text style={[Styles.hurufKonten, {
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center'
          }]}>Kedai Dumbways</Text>
          <View style={{ flexDirection: 'row' }}>
            <IconIon name='md-timer' size={17} style={{ marginRight: 5 }}></IconIon>
            <Text>0:40:40</Text>
          </View>
        </View>

        {/* List Kategory */}
        <View style={[Styles.content, Styles.cardSimpleContainer, {
          backgroundColor: Color.whiteColor,
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginBottom: 10,
          paddingBottom: 10
        }]}>
          {this.props.Menu.isLoading ?
            <ActivityIndicator></ActivityIndicator>
            :
            <FlatList
              horizontal={true}
              data={this.props.Category.dataItem}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CompTouchable namaKategori={item.name} onPress={() => this.aksiCategoryMenus(item.id, item.name)} />
              )}
            />
          }
        </View>

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

            {this.props.Menu.isLoading ?
              <ActivityIndicator></ActivityIndicator>
              :
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
                    onPress={() => this.aksiAddOrderMenus(item.id, this.state.idTransaction)}
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

        {/* Option */}
        <View style={[Styles.content, Styles.cardSimpleContainer, {
          backgroundColor: Color.whiteColor,
          width: '100%',
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row'
        }]}>

          
          <TouchableOpacity style={[Styles.cardSimpleContainer, {
            backgroundColor: Color.accentColor,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            margin: 5,
            height: '100%',
            flex:1,
            flexDirection: 'row'
          }]}
            onPress={() => this.props.navigation.navigate('ScreenCart')}
          >
            <Text style={[Styles.hurufKonten, {
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center'
            }]}>
              LIHAT KERANJANG</Text>
          </TouchableOpacity>


          {/* Seleksi Button Confirm */}
          {false ?
            <TouchableOpacity style={[Styles.cardSimpleContainer, {
              backgroundColor: Color.accentColor,
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: 5,
              margin: 5,
              height: '100%',
              flexDirection: 'row'
            }]}
              onPress={() => alert('CONFIRM')}
            >
              <Text style={[Styles.hurufKonten, {
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center'
              }]}>
                CONFIRM</Text>
            </TouchableOpacity>
            : false
            // <TouchableOpacity style={[Styles.cardSimpleContainer, {
            //   backgroundColor: Color.accentColor,
            //   justifyContent: 'center',
            //   alignItems: 'center',
            //   padding: 5,
            //   margin: 5,
            //   height: '100%',
            //   flex:1,
            //   flexDirection: 'row'
            // }]}
            //   onPress={() => this.clearNoMeja()}
            // >
            //   <Text style={[Styles.hurufKonten, {
            //     fontSize: 15,
            //     fontWeight: 'bold',
            //     textAlign: 'center'
            //   }]}>
            //     CONFIRM</Text>
            // </TouchableOpacity>
          }
          {/* End sleksi Button Conf */}

          <TouchableOpacity style={[Styles.cardSimpleContainer, {
            backgroundColor: Color.accentColor,
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 5,
            margin: 5,
            height: '100%',
            flexDirection: 'row'
          }]}
            onPress={() => this.props.navigation.navigate('ScreenViewbill')}
          >
            <Text style={[Styles.hurufKonten, {
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center'
            }]}>
              VIEW BILL</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Menu: state.Menu,
    Category: state.Category,
    Transaction: state.Transaction,
    Order: state.Order
  }
}

export default connect(mapStateToProps)(ScreenHome)