import React from 'react'
import { Text, View, StyleSheet,ImageBackground } from "react-native"
import {FontAwesome5} from '@expo/vector-icons';
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    fondo:{
        flex: 2,
        height:'100%',
        width: '100%',
        resizeMode:'contain',
        alignItems:'center', 
        justifyContent: "center",
        marginBottom: "-10%"
    }
})

export default function HomeScreen({navigation}) {
    return <View style={styles.view}>
                <ImageBackground source={require('../Img/fondo_simple.png')} style={styles.fondo}>
                    <Text style={{fontSize: 34, fontWeight: "bold", marginBottom: 20 ,color:"#FBBA00"}}>INGRESO EXISTOSO</Text>
                        <View>
                            <FontAwesome5 name="thumbs-up" size={35} color={"#FBBA00"}  />
                        </View>
                        
                            <Btn onClick={() => navigation.navigate("Api")} title="REGISTRAR KEYS" style={{ width: "48%", backgroundColor: "#FBBA00", top:"28%" }} />
                            <Btn title="CERRAR SESION" onClick={() => firebase.auth().signOut()} style={{ width: "48%", backgroundColor: "#FBBA00",top:"31%" }}/>
                        

                </ImageBackground>
            </View>
                                                }