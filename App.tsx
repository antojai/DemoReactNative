import { View, Text, SafeAreaView, ScrollView, Platform } from 'react-native'
import React, { useEffect } from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import Login from './components/login'

const App = () => {

  return (
    <SafeAreaView>
      <ScrollView>
     <Login/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App