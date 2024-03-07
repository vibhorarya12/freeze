import React from 'react'
import { Text, View } from 'react-native'

export default function Home() {
  return (
    <View style ={{flex:1, backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>
            This is Home
        </Text>
    </View>
  )
}
