import React, { useState } from 'react'
import { Text, View, StyleSheet, ImageBackground,Image } from "react-native"
import * as Animatable from 'react-native-animatable';



const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        flex: 1,        
    },
    fondo:{
        flex: 0,
        height:'100%',
        width: '100%',
        resizeMode:'contain',
        alignItems:'center',     
    },
    logo :{
        alignItems:"center",
        top:'35%',
        marginBottom:'-20%'
    },
    Cabeza_condor:{
        top:"10%",
        resizeMode:'contain',
        width:200,
        height:200
    },
    Chacana_arriba:{
        top:"-150%",
        resizeMode:'contain',
        width:200,
        height:200,
    },

    Chacana_derecha:{
        top:"-192%",
        resizeMode:'contain',
        width:200,
        height:200,
        left: "36.3%"
    },

    Chacana_abajo:{
        top:"-220%",
        resizeMode:'contain',
        width:200,
        height:200,
        left:"6%"
    },
    Chacana_izquierda:{
        top:"-380%",
        resizeMode:'contain',
        width:200,
        height:200,
        right:"29.8%"
    }

})



export default function IndexScreen({ navigation}) {
    setTimeout(() => {
        navigation.navigate("Inicio" )
    }, 3000);
    return (
        <View  style={styles.view}>
            <ImageBackground source={require('../Img/fondo_index.png')} style={styles.fondo}>

                <View style={styles.logo}>
                      
                            <Animatable.View animation="fadeInUpBig" duration={1000}>
                                    <Image style={styles.Cabeza_condor} source={require('../Img/cabeza_condor.png')}  /> 
                            </Animatable.View>
                            <Animatable.View animation="fadeInDownBig" duration={1300}>
                                    <Image style={styles.Chacana_arriba} source={require('../Img/chacana_arriba.png')}  /> 
                            </Animatable.View>
                             <Animatable.View animation="fadeInRightBig" duration={1600}>
                                    <Image style={styles.Chacana_derecha} source={require('../Img/chacana_derecha.png')}  /> 
                            </Animatable.View>
                             <Animatable.View animation="fadeInUpBig" duration={1900}>
                                    <Image style={styles.Chacana_abajo} source={require('../Img/chacana_abajo.png')}  /> 
                            </Animatable.View>
                             <Animatable.View animation="fadeInLeftBig" duration={2100}>
                                    <Image style={styles.Chacana_izquierda} source={require('../Img/chacana_izquierda.png')}  /> 
                            </Animatable.View>   
                </View>

            </ImageBackground>

        </View>
    )
}





