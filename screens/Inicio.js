import React, { useState } from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"
import firebase from 'firebase/app';
import "firebase/auth";


//Estilos 
const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        flex: 1,        
    },
    fondo:{
        flex: 2,
        height:'100%',
        width: '100%',
        resizeMode:'contain',
        alignItems:'center',     
    },
    btn1:{
        marginTop:'180%',
        
    },
    txtbtn1:{
        color:'#FBBA00',
        fontSize: 18,
        fontWeight:'bold'
    },
    btn2:{
        fontWeight: "bold",
        color:'#FBBA00',
        marginTop:'3%'
    }
})


//front inicio de app
export default function InicioScreen({navigation}) {
    return (
        <View  style={styles.view}>
            <ImageBackground 
                source={require('../Img/fondo_inicio.png')} 
                style={styles.fondo}
            >
            <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.txtbtn1}>INICIAR SESION</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate("Sign Up")}>
                <Text style={styles.txtbtn1}>REGISTRATE AHORA</Text>
            </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}






