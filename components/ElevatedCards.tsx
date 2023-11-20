import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
    <ScrollView horizontal={true} style={styles.container}>
    <View style={[styles.card, styles.cardElevated]}>
            <Text>0</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>1</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>2</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>3</Text>
        </View>
    </ScrollView>
        
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({ 
    headingText:{
        color:'#000000',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container:{
        padding:8,

    },
    card:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width:100,
        height:100,
        margin: 8,
        borderRadius:10
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:5,
        shadowOffset:{
            width: 1,
            height:1
        },
        shadowColor:'black'
    }
})