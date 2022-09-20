import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux';
import { currentNav } from '../redux/slicer';

import StepProgress from '../component/StepProgress'
import Carousel from '../component/Carousel';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PaymentsScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
   
    navigation.addListener('focus', (route)=>
       dispatch(currentNav(2))
    )
    return () => {
    }
  }, [])

  return (
    <ScrollView>
      <View style={{ width: windowWidth, alignItems: 'center' }}>
        { /* Section 1 Carousel */}
        <View style={[styles.shadowProp,styles.container]}>
          <Carousel />
        </View>

        { /* Section 2 Transaction */}
        <View style={[styles.shadowProp, styles.container, { marginVertical: 5, padding: 10 }]}>
          <View style={styles.flexpad}>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontWeight: 'bold', color: '#d06602' }}>Pending Request</Text>
              <Text style={{ fontSize: 12 }}>9.10 am, 12/01/2019</Text>
            </View>
            <View style={{ width: '70%', display: 'flex' }} >
              <StepProgress />
            </View>
          </View>

          <View style={[styles.flexpad,{ overflow: 'hidden' }]}>
            <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={styles.tinyLogo}
                source={{ uri: 'https://bdtexgroup.com.bd/public/front/User-icon.png', }}
              />
              <View style={{ paddingLeft: 5 }}>
                <Text style={{color:'#018ab8', fontWeight:'bold', fontSize:15}}>Ray Pressley</Text>
                <Text style={{color:'#000'}}>San Francisco</Text>
              </View>
            </View>

            <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
              <Image
                style={styles.tinyLogo}
                source={{ uri: 'https://www.pngitem.com/pimgs/m/77-772589_handshake-icon-blue-png-after-sales-service-icon.png', }}
              />
              <View style={{ paddingLeft: 5, flex: 1 }}>
                <Text style={{color:'#000', fontSize:13}}>You and Ray had 12 deals before. </Text>
              </View>
            </View>
          </View>

          <View><Text>Service is complete, please confirm payment amount:</Text></View>

          <View style={styles.flexpad}>
            <View><MIcon name='clock-time-three-outline' size={20} color='#000' style={{ paddingRight: 5 }} /></View>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.timetxt}>Invoice Item:</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.timetxt}>Session Price</Text>
                <Text style={[styles.timetxt,{color:'#d06602', fontWeight:'bold'}]}>$80.00</Text>
              </View>
            </View>
          </View>
 

          <View style={[styles.flexpad,{ alignItems: 'center', justifyContent: 'space-between' }]}>
            <TouchableOpacity onPress={() =>{ dispatch(currentNav(2)), navigation.navigate('ServicesScreen', { name: 'Jane' })}} style={styles.buttontrans}>
              <Text style={styles.buttontranstxt}>Start a Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Payment Success')} style={styles.button}>
              <Text style={styles.buttontxt}>Resend Invoice</Text>
            </TouchableOpacity>
            <View><MIcon name='dots-horizontal' size={28} color='#000' /><Text>More</Text></View>
          </View>

        </View>

        { /* Section 3 Null return */}
        <View style={{paddingVertical:25}}>
        <Text>No more service requests</Text>
        </View>
      </View>
    </ScrollView> 
  )
}

export default PaymentsScreen

const styles = StyleSheet.create({
  container:{
    marginVertical: 10, width: windowWidth - 25,  overflow:'hidden'
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 3,
    backgroundColor:'#fff'
  },
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
flexpad:{
  flexDirection: 'row', 
  paddingVertical: 10
},
button: {
  alignItems: "center",
  backgroundColor: "#018ab8",
  padding: 10,
  borderWidth:2,
  borderColor:'#018ab8',
  borderRadius:5
},
buttontxt:{
color:'#fff'
},
buttontrans: {
  alignItems: "center",
  backgroundColor: "#fff",
  padding: 10,
  borderWidth:2,
  borderColor:'#018ab8',
  borderRadius:5
},
buttontranstxt:{
  color:'#018ab8'
  },
  timetxt:{
    fontSize: 12, fontWeight: 'bold', color:'#000'
  }
});