//Pantalla Inicio

//Importaciones
import React from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native"
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
        marginTop:'173%',
        
    },
    txtbtn1:{
        color:'#FBBA00',
        fontSize: 15,
        fontWeight:'bold'
    },
    btn2:{
        fontWeight: "bold",
        color:'#FBBA00',
        marginTop:'3%'
    },
    Imagenlogo:{
        resizeMode:'contain',
        width:180,
        height:120
    },
    logo :{
        alignItems:"center",
        top:'68%',
        marginBottom:'-20%'
    }
})


//Funcion Princial inicio de app
export default function InicioScreen({navigation}) {
    
    //Front
    return (
        <View  style={styles.view}>
            <ImageBackground 
                source={require('../Img/fondo_inicio.png')} 
                style={styles.fondo}
            >
                <View style={styles.logo}>
                    <Image style={styles.Imagenlogo} source={require('../Img/logo_condor2.png')}/>
                </View>
                <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.txtbtn1}>
                        INICIAR SESION
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate("Sign Up")}>
                    <Text style={styles.txtbtn1}>
                        REGISTRATE AHORA
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}






