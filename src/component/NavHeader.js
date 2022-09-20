import React from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableHighlight, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'
import { logo } from '../assets'


const NavHeader = (props) => {

  const navigation = useNavigation()

  return (
    <View>
      <StatusBar
        backgroundColor="#018ab8"
        barStyle="light-content"
      />

      <View style={styles.header}>
        <View style={{ flexDirection: 'row', flex: 1 / 4, justifyContent: 'space-between', paddingV: 5 }}>
          <Icon name='align-justify' size={28} color='#000' onPress={()=>console.log('clicked')} />
          <Icon name='search' size={28} color='#000' />
        </View>
        

      </View>
 
    </View>
  )
}

export default NavHeader

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 5,
    zIndex:99
  }
}); 