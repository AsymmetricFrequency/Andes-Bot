import React from 'react'
import { Text, View, StyleSheet,ImageBackground,TouchableOpacity,Image,Linking } from "react-native"
import firebase from 'firebase/app';
import "firebase/auth";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",

    },
    fondo:{
        flex: 1,
        height:'100%',
        width: '100%',
        resizeMode:'contain',
        alignItems:'center', 
     
    },

    btnRegistrarLLaves: {
        height: 42,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        width: "48%",
        backgroundColor: "#FBBA00", 
        top:"55%"

        
    },
    textRegistrarLLaves:{
        fontSize: 20,
        fontWeight: "bold",
        color:'#4D1A70'
    },
    btnCerrarSesion: {
        height: 42,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        width: "48%",
        backgroundColor: "#FBBA00", 
        top:"58%"

        
    },
    textCerrarSesion:{
        fontSize: 20,
        fontWeight: "bold",
        color:'#4D1A70'
    },

    contBinace:{
        top:"20%",
    },

    CtxtBinance:{
        top:"19%"
        
    },

    CtxtYoutube:{
        top:"39%"
        
    },

    txtBinance:{
        fontSize:15,
        color:"black",
        
    },


    Icono_binance:{
        borderRadius:10,
        width:350,
        height:120
    },

    contYoutube:{
        top:"25%",
    },
    Icono_youtube:{
        borderRadius:10,
        width:350,
        height:120
    },
    develop:{ 
        textAlign:"center",
        top:'65%'
        }
})

export default function HomeScreen({navigation}) {
    return <View style={styles.view}>
                <ImageBackground source={require('../Img/fondo_simple2.png')} style={styles.fondo}>
                          
                            
                           
                        <View style={styles.contBinace}>
                                <TouchableOpacity  onPress={() => navigation.navigate("Api")} >
                                        <Image  source={require('../Img/Icono_binance.png')} style={styles.Icono_binance}/>  
                                </TouchableOpacity>
                        </View>
                        <View style={styles.contYoutube}>
                                <TouchableOpacity  onPress={() => Linking.openURL('https://www.youtube.com/watch?v=gyIVjy7NDCU')}>
                                        <Image  source={require('../Img/Icono_ftx.png')} style={styles.Icono_youtube}/>  
                                </TouchableOpacity>
                        </View>
                        
                        <View style={styles.develop}>
                            <Text style={{color:"#FBBA00",fontSize: 10,fontWeight: "700",}}>DEVELOPED BY CONDOR LAB</Text>
                        </View>
                        

                </ImageBackground>
            </View>
             
                                                }