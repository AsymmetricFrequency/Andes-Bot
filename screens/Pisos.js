import React from 'react'
import { Text, View, StyleSheet, ImageBackground,Image,TouchableOpacity, Switch ,TextInput,ScrollView ,Button } from "react-native"
import {FontAwesome5} from '@expo/vector-icons';
import "firebase/auth";

export default function PisosScreen({navigation}) {

const inputs = Array(parseInt(cant_pisos)).fill()

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

    containerConf:{

        flexDirection:"row",
        marginTop:"18%",
        alignItems:'center',
       
        
    },

    iconreturn:{

        width:"21%",
        
        
    },


    txtconf:{
        width:"68%",
        fontSize: 20, 
        fontWeight: "bold",
        color: "#4D1A70" ,
   
    },
    titulo:{
        
        flexDirection:'row',
        paddingTop:'20%',
        //paddingLeft:"5%",
        //paddingRight:"5%",
        
    },

    tituloL:{
        width:"33%",
      

    },
    tituloC:{
        width:"33%",
        alignItems:"center"
    },

    txtPorcentaje:{
        fontSize: 20, 
        fontWeight: "bold",
        color: "#4D1A70" ,
        

    },

    tituloR:{
        width:"33%",
        alignItems:"center"   

    },

    txtReplica:{
        fontSize: 20, 
        fontWeight: "bold",
        color: "#4D1A70" ,
        


    },

    pisos:{
        flexDirection:"row",
        paddingTop:"4%",
        paddingLeft:"5%",
        paddingRight:"7%",
        flex:5,
        
        
    },

    pisosL:{

        width:"33%",

    },
    pisosC:{
        
        width:"33%",
        //height:"110%",
        backgroundColor:"#4D1A70",
        borderRadius: 10,
        marginRight:"1%",
        marginLeft:"1%",
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
                    <View >
                        <View style={styles.containerConf} >
                            <TouchableOpacity style={styles.iconreturn}>
                                <FontAwesome5 name="angle-double-left" size={20} color={"#4D1A70"} onPress={()=> navigation.navigate("Configuracion_bot")}  />
                            </TouchableOpacity>
                                <Text style={styles.txtconf} >CONFIGURACION PISOS</Text>
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
                                                    <TextInput  color="white" placeholder = "% % %" placeholderTextColor="#fff"  keyboardType="numeric" />
                                                </View>
                                                <View style={styles.pisosR}>
                                                    <TextInput  color="white" placeholder = "# # #" placeholderTextColor="#fff"  keyboardType="numeric" />
                                                </View>
                        
                                        </View>
                                        } )}
                        
                        </View>     
                </ScrollView>                      
            </ImageBackground>

        </View>
    )
}













