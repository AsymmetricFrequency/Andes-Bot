import React, { useState } from 'react'
import { Text, View, StyleSheet, ImageBackground,Image,TouchableOpacity, Switch ,TextInput,ScrollView } from "react-native"
import * as Animatable from 'react-native-animatable';
import firebase from 'firebase/app';
import "firebase/auth";
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { isDisabled } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';




export default function PisosScreen({ navigation}) {

const inputs = Array(5).fill([''])
const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        flex: 1,
     
        
    },
    fondo:{

        height:'100%',
        width: '100%',
        resizeMode:'contain',
        alignItems:'center',    
            
  
    },

    txtconf:{
        top:"8%",
        fontSize: 20, 
        fontWeight: "700",
        color: "#4D1A70" ,
   
    },
    titulo:{
        
        flexDirection:'row',
        marginTop:'30%',
        marginLeft:"5%",
        marginRight:"5%"
    },

    tituloL:{
        width:"33%",
        fontSize: 20, 
        fontWeight: "700",
        color: "#4D1A70" ,

    },
    tituloC:{
        width:"33%",
        fontSize: 20, 
        fontWeight: "700",
        color: "#4D1A70" ,
        alignItems:"center"
    },


    tituloR:{
        width:"33%",
        fontSize: 20, 
        fontWeight: "700",
        color: "#4D1A70" ,
        alignItems:"center"

    },
    pisos:{
        flexDirection:"row",
        marginTop:"10%",
        marginLeft:"5%",
        marginRight:"5%"
    },

    pisosL:{

        width:"33%",

    },
    pisosC:{
        
        width:"33%",
        backgroundColor:"#4D1A70",
        borderRadius: 10,
        marginRight:"1%",
        marginLeft:"2%",
        alignItems:'center',
        
    },
    pisosR:{
        marginLeft:"1%",
        marginRight:"1%",
        width:"33%",
        backgroundColor:"#4D1A70",
        borderRadius: 10,
        alignItems:'center'

    }

})
     
    
    return (

        
        <View style={styles.view}>
            <ImageBackground source={require('../Img/fondo_config_bot.png')} style={styles.fondo}>
                    <Text style={styles.txtconf}>CONFIGURACION PISOS</Text>
                <View style={styles.titulo}>
                <View style={styles.tituloL}>
                        <Text style={styles.txtconf}></Text>  
                    </View>          
                    <View style={styles.tituloC}>
                        <Text style={styles.txtconf}>Porcentaje</Text>  
                    </View>                    
                    <View style={styles.tituloR}>
                        <Text style={styles.txtconf}>Replica</Text> 
                    </View>
                </View> 
                <View>
                    {inputs.map((inp,index) => {
                        return  <View style={styles.pisos}>
                                        <View key={index.toString()} style={styles.pisosL}>
                                            <Text style={styles.txtconf}>Piso {index +1}</Text> 
                                        </View>
                                        <View style={styles.pisosC}>
                                            <TextInput  color="white" placeholder = "% % %" placeholderTextColor="#fff"  keyboardType="numeric" />
                                        </View>
                                        <View style={styles.pisosR}>
                                            <TextInput  color="white" placeholder = "# # #" placeholderTextColor="#fff"  keyboardType="numeric" />
                                        </View>
                
                                </View>
                                } )}

                   
                </View>     

            </ImageBackground>

        </View>
    )
}













