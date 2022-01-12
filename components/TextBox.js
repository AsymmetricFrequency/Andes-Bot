import React from 'react'
import {View, TextInput, StyleSheet} from "react-native"
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const styles = StyleSheet.create({
    container: {
        
        height: 42,
        width: "92%",
        borderRadius: 10,
        marginTop: 20,
        backgroundColor:"#fff"
    },
    textInput: {
        marginTop: 0,
        width: "100%",
        borderWidth: 1,
        paddingLeft: 15
    }

})

export default function Loginscreen(props){
    return <View style={styles.container}>
        <TextInput style={{...styles.container, ...styles.textInput}} {...props} />
    </View>
}