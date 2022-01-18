//Pantalla Pisos

//Importaciones
import React from 'react'
import { Text, View, StyleSheet, ImageBackground,TouchableOpacity ,TextInput,ScrollView } from "react-native"
import {FontAwesome5} from '@expo/vector-icons';
import "firebase/auth";

//Estilos
const styles = StyleSheet.create({

    view: {
        width: '100%',
        height: '100%',
        flex: 1
    },

    fondo:{
        height:'100%',
        width: '100%',
        resizeMode:'contain',
        alignItems:'center'
    },

    containerConf:{
        flexDirection:"row",
        marginTop:"18%",
        alignItems:'center'
    },

    iconreturn:{
        width:"21%"
    },

    txtconf:{
        width:"68%",
        fontSize: 20, 
        fontWeight: "bold",
        color: "#4D1A70"
    },

    titulo:{    
        flexDirection:'row',
        paddingTop:'20%' 
    },

    tituloL:{
        width:"33%"
    },

    tituloC:{
        width:"33%",
        alignItems:"center"
    },

    txtPorcentaje:{
        fontSize: 20, 
        fontWeight: "bold",
        color: "#4D1A70"
    },

    tituloR:{
        width:"33%",
        alignItems:"center" 
    },

    txtReplica:{
        fontSize: 20, 
        fontWeight: "bold",
        color: "#4D1A70"
    },

    pisos:{
        flexDirection:"row",
        paddingTop:"4%",
        paddingLeft:"5%",
        paddingRight:"7%",
        flex:5
    },

    pisosL:{
        width:"33%"
    },

    pisosC:{
        width:"33%",
        borderColor:"#4D1A70",
        borderRadius: 10,
        marginRight:"1%",
        marginLeft:"1%",
        borderWidth: 1,
        paddingLeft: 6
    },

    pisosR:{
        marginLeft:"1%",
        marginRight:"1%",
        width:"33%",
        borderColor:"#4D1A70",
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 6
    }
})

//Funcion Principal Pisos
export default function PisosScreen({navigation}) {

    //Recibe Pisos y crea Array
    const inputs = Array(parseInt(cant_pisos1)).fill()

    //Front
    return (
        <View style={styles.view}>
            <ImageBackground source={require('../Img/fondo_config_bot.png')} style={styles.fondo}>
                <View>
                    <View style={styles.containerConf} >
                        <TouchableOpacity style={styles.iconreturn}>
                            <FontAwesome5 name="angle-double-left" size={20} color={"#4D1A70"} onPress={()=> navigation.navigate("Configuracion_bot")}  />
                        </TouchableOpacity>
                            <Text style={styles.txtconf} >
                                CONFIGURACION PISOS
                            </Text>
                    </View> 
                </View>

                <View style={styles.titulo}>
                    <View style={styles.tituloL}>
                        <Text ></Text>  
                    </View>
                                
                    <View style={styles.tituloC}>
                        <Text style={styles.txtPorcentaje}>Porcentaje</Text>  
                    </View>                    
                    <View style={styles.tituloR}>
                        <Text style={styles.txtReplica}>Replica</Text> 
                    </View>
                </View> 

                <ScrollView>
                    <View>
                        {inputs.map((inp,index) => {
                            return  <View style={styles.pisos}>
                                        <View key={index.toString()} style={styles.pisosL}>
                                            <Text style={styles.txtconf}>Piso {index +1}</Text> 
                                        </View>
                                        <View style={styles.pisosC}>
                                            <TextInput  color="black" placeholder = " % " placeholderTextColor="rgba(0, 0, 0, 0.28)"  keyboardType="numeric" />
                                        </View>
                                        <View style={styles.pisosR}>
                                            <TextInput  color="black" placeholder = " #" placeholderTextColor="rgba(0, 0, 0, 0.28)"  keyboardType="numeric" />
                                        </View>
                                    </View>
                                    } )}
                        
                    </View>     
                </ScrollView>                      
            </ImageBackground>
        </View>
    )
}













