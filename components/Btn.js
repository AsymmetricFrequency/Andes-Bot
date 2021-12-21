import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    btn: {
        height: 42,
        width: "92%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",

        
    },
    text:{
        fontSize: 20,
        fontWeight: "700",
        color:'#4D1A70'
    }

})

export default function Button(props){
    return <TouchableOpacity onPress={props.onClick}  style={{...styles.btn, ...props.style}}>
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
}