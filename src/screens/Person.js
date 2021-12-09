import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Person = () => {
    return (
        <View style={styles.container}>
            <Text>Person</Text>
        </View>
    )
}

export default Person

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
