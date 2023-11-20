import { View, Text, SafeAreaView, ScrollView, Platform } from 'react-native'
import React, { useEffect } from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(()=>{
    if(Platform.OS ==="android")
    SplashScreen.hide();
  },[])
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards />
      <ElevatedCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App