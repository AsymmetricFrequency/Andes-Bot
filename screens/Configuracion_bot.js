import React, { useState } from 'react'
import { Text, View, StyleSheet, ImageBackground,Image,TouchableOpacity, Switch ,TextInput } from "react-native"
import * as Animatable from 'react-native-animatable';
import firebase from 'firebase/app';
import "firebase/auth";
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { isDisabled } from 'react-native/Libraries/LogBox/Data/LogBoxData';
export default function Configuracion_botScreen({ navigation}) {

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
    contenidotop:{
        flexDirection:'row',
        top:'30%',
    },
    contenidotopL:{
        width:'50%',
        paddingLeft:'5%',
    },

    contenidotopR:{
        width:'50%',
        justifyContent:"center",
        paddingRight: '5%', 
    },
    txtconf:{
        top:"8%",
        fontSize: 30, 
        fontWeight: "700",
        color: "#4D1A70" ,

    },
    btn_auto:{
        width:150,
        height:40,
        borderRadius: 12,
        marginTop:'2%',
        alignItems:"center",
        justifyContent:"center"
    },
    txtbtn_auto:{
        fontWeight:'bold',
        fontSize: 20
        
    },
  
    
    contes:{
        flexDirection:'row',
        marginTop:'50%',

    },
    contenidoL:{
        width:'50%',
        paddingLeft:'5%',
        justifyContent:'center'
    },
    textcantidad:{
        fontSize: 20, 
        fontWeight: "700",
        color: "#4D1A70" ,
    },

    contenidoR1:{
        width:'50%',
        borderRadius: 10,
        alignItems:"center",
        right: '15%',
        color:'white',
        paddingTop:'1%',
        paddingBottom:'1%',
        paddingLeft:'2%',
        paddingRight:'2%'
    },
    contenidoR2:{
        width:'50%',
        borderRadius: 10,
        alignItems:"center",
        right: '15%',
        color:'white',
        paddingTop:'1%',
        paddingBottom:'1%',
        paddingLeft:'2%',
        paddingRight:'2%'
    },
    contenidoR3:{
        width:'50%',
        borderRadius: 10,
        alignItems:"center",
        right: '15%',
        color:'white',
        paddingTop:'1%',
        paddingBottom:'1%',
        paddingLeft:'2%',
        paddingRight:'2%'
    },

    Inputcantidad:{
        color:'white'
        

    },
    contes2:{
        flexDirection:'row',
        marginTop:'10%',

    },
    contes3:{
        flexDirection:'row',
        marginTop:'10%',

    },

    btn_configurar:{
        width:200,
        height:35,
        backgroundColor: "#4D1A70",
        borderRadius: 15,
        marginTop:'15%',
        alignItems:"center",
        justifyContent:"center",
        left:"23%"
       
    },
    txtbtn_configurar:{
       
        fontSize: 20,
        fontWeight:'bold'
        
    },
   
    btn_finalizar:{
        width:200,
        height:40,
        backgroundColor: "#4D1A70",
        borderRadius: 15,
        marginTop:'15%',
        alignItems:"center",
        justifyContent:"center"
    },
    txtbtn_finalizar:{
        color:'#FBBA00',
        fontSize: 20,
        fontWeight:'bold'
        
    }

    
 
})
     

     const [isEnabled, setIsEnabled ] = useState(false);
     const toggleSwitch = () =>{ setIsEnabled(!isEnabled);}
     
      
    

    
    
    return (
        <View style={styles.view}>
            <ImageBackground source={require('../Img/fondo_config_bot.png')} style={styles.fondo}>
                    <Text style={styles.txtconf}>Configuracion bot</Text>
                <View style={styles.contenidotop}>
                    <View style={styles.contenidotopL}>
                    
                        <TouchableOpacity style={[styles.btn_auto,{ backgroundColor:isEnabled?"rgba(77, 26, 112, 0.3)" : "#4D1A70" }]} disabled={true} >
                            <Text style={[styles.txtbtn_auto,{color:isEnabled?"#4D1A70" : "#FFF"}]}>{isEnabled? "Automatico" : "Manual" }</Text>
                        </TouchableOpacity>
                    </View>                    
                    <View style={styles.contenidotopR}>
                        <Switch
                            style={styles.btn_switch}
                            trackColor={{ false: "#767577", true: "#4D1A70" }}
                            thumbColor={isEnabled ? "#FBBA00" : "#FBBA00"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    
                </View>
                    
                <View style={styles.contes}>
                    <View style={styles.contenidoL}>
                        <Text style={styles.textcantidad}>CANTIDAD</Text> 
                    </View >
                    <View style={[styles.contenidoR1 ,{ backgroundColor:isEnabled?"rgba(77, 26, 112, 0.3)" : "#4D1A70" } ]}   >
                        <TextInput color="white" placeholder={isEnabled?"" :"$ $ $"} placeholderTextColor="#fff" editable={!isEnabled} keyboardType="numeric"/>
                    </View>

                </View>

                <View style={styles.contes2}>
                    <View style={styles.contenidoL}>
                        <Text style={styles.textcantidad}>PROFIT</Text> 
                    </View>
                    <View style={[styles.contenidoR2 , { backgroundColor:isEnabled?"rgba(77, 26, 112, 0.3)" : "#4D1A70" }]}>
                        <TextInput  color="white" placeholder={isEnabled? "":"% % %"} placeholderTextColor="#fff" editable={!isEnabled} keyboardType="numeric"/>
                    </View>

                </View>      

                <View style={styles.contes3}>
                    <View style={styles.contenidoL}>
                        <Text style={styles.textcantidad}>PISOS</Text> 
                    </View>
                    <View style={[styles.contenidoR3 ,{ backgroundColor:isEnabled?"rgba(77, 26, 112, 0.3)" : "#4D1A70" }]}>
                        <TextInput  color="white"placeholder={isEnabled? "":"# # #"} placeholderTextColor="#fff" editable={!isEnabled} keyboardType="numeric" />
                    </View>

                </View>

                 <View>

                    <TouchableOpacity style={[styles.btn_configurar,{ backgroundColor:isEnabled?"rgba(77, 26, 112, 0.3)" : "#4D1A70" }]} disabled={isEnabled} onPress={() => navigation.navigate("Pisos")}>
                        <Text style={[styles.txtbtn_configurar,{color:isEnabled? "rgba(250, 183, 0, 0.28)" : "#FBBA00"}]}>CONFIGURAR</Text>
                    </TouchableOpacity>
                    
                    
                </View>  

                
                <View>

                    <TouchableOpacity style={styles.btn_finalizar}>
                        <Text style={styles.txtbtn_finalizar}>INICIAR</Text>
                    </TouchableOpacity>
                    
                    
                </View>   
                          

               

            </ImageBackground>

        </View>
    )
}













