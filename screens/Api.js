import React, { useState } from 'react'
import { Text, View, StyleSheet,ImageBackground,TextInput,Image,Linking,TouchableOpacity } from "react-native"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { List } from 'react-native-paper';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';





//Estilos 

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        height:"100%",
       
       
        
        
    },
    fondo:{
        flex: 2,
        height:'100%',
        width: '100%',
        resizeMode:'contain',
        alignItems:'center', 
        justifyContent: "center",
    
        
    },
    textbox_keys:{
        top:"18%",
        marginTop:"5%",
        height: 42,
        width: "92%",
        borderRadius: 10,
        alignItems: "center",
        borderColor:'#4D1A70',
        borderWidth: 1,
        paddingLeft: 6
    },

    develop:{ 
    textAlign:"center",
    top:'30%'

    },
    Icono_api:{
        top:"150%",
        width:80,
        height:80
    },

    contTxtInstrucciones:{
        top:"5.2%",
        left:-120,
        backgroundColor:'white',
        elevation:0.1,
        padding:5,
        

    },
    contInstrucciones:{
        top:"4%",
        borderWidth: 1,
        borderColor:"rgba(196, 196, 196, 1)",
        borderRadius:10,
        padding:5,
        
    },

    

    txtInstrucciones:{
        fontSize:14,
        color:"rgba(196, 196, 196, 1)"

    },

    txtClick:{
        fontSize:15,
        color:"#FBBA00",
        textDecorationLine: 'underline'
    }

})

//Funcion principal para registrar llaves en base de datos firebase-firestore
export default function ApiScreen({ navigation}) {

    const [values, setValues] = useState({
     
        api_publica: "",
        api_secreta: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    // Funcion para extraer el id predeterminado del usuario registrado
    async function getUid() {
        const user = await firebase.auth().currentUser
        if (user === null){
            return null
        }else{
            return user.uid;
        } 
    
    }
     //Funcion para enviar las llaves a la base de datos 
    async function Keys(){
        
        const  uid = await getUid()
        const { api_publica, api_secreta } = values
        firebase.firestore().collection('Usuarios').doc(uid).set({
            values
        })

        if (values.api_publica != "" && values.api_secreta != "") {
            
            const ref = await firebase.firestore().collection('Usuarios').doc(uid).get(values)
            navigation.navigate("Moneda")
            
                .then(() => {
                     
                })
                
                .catch((error) => {
                    alert(error.message)
                    // ..
                });
        } else {
            alert("Porfavor ingrese las llaves ")
        }
     

    }

    //Front pagina para registrar llaves 

    return <View style={styles.view}>

        <ImageBackground source={require('../Img/fondo_simple2.png')} style={styles.fondo}>
             {/* <View >
                <Image  source={require('../Img/Icono_api.png')} style={styles.Icono_api} />
            </View> */}

            <View style={styles.contTxtInstrucciones}>
                <Text style={[styles.txtInstrucciones,{fontSize:16} ]}>Instrucciones</Text>
            </View>
            <View style={styles.contInstrucciones}>
                <Text style={styles.txtInstrucciones}>1. Ingresa a BINANCE y copia tus llaves</Text>
                <TouchableOpacity>
                    <Text style={styles.txtClick} onPress={() => Linking.openURL("https://www.binance.com/es")} >¡da click aqui!</Text>
                </TouchableOpacity>
                <Text style={styles.txtInstrucciones}>2.Si no tienes API ingresa a este Link y sigue los pasos </Text>
                <TouchableOpacity>
                <Text style={styles.txtClick}  onPress={() => Linking.openURL("https://www.youtube.com/watch?v=Tf_c8SL3FRc")} >¡da click aqui!</Text>
                </TouchableOpacity>
            </View>

            <TextInput style={styles.textbox_keys} color ="black" placeholder="INGRESE API PUBLICA" placeholderTextColor="rgba(0, 0, 0, 0.28)" onChangeText={text => handleChange(text, "api_publica")} />
            <TextInput style={styles.textbox_keys } color ="black"  placeholder="INGRESE API SECRETA" placeholderTextColor="rgba(0, 0, 0, 0.28)" onChangeText={text => handleChange(text, "api_secreta")} />
            <View style={{ justifyContent: "center", alignItems: "center", width: "92%",top:"20%" }}>
                <Btn onClick={() => Keys() } title="INICIAR" style={{ width: "50%",backgroundColor: "#FBBA00",fontSize: 30 }} />    
            </View>
           

            <View style={styles.develop}>
                <Text style={{color:"#FBBA00",fontSize: 10,fontWeight: "700",}}>DEVELOPED BY CONDOR LAB</Text>
            </View>


        </ImageBackground>
    </View>
}