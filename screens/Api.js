//Pantalla de las Llaves de Binance.

//Importaciones
import React, { useState } from 'react'
import { Text, View, StyleSheet,ImageBackground,TextInput,Linking,TouchableOpacity, Image } from "react-native"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

 
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
        position:'relative',
        top:100,
        marginTop:5,
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
        top:'32%'
    },

    Icono_api:{
        position:'absolute',
        top:-150,
        marginLeft:-75,
        width:150,
        height:150
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
    },

    btn_iniciar:{
        position:'absolute',
        marginTop:150,
        marginLeft:-65,
        width: 130,
        height:35,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FBBA00",
        borderRadius:20
    },

    text_iniciar:{
        fontSize: 20,
        fontWeight:'bold',
        color:"#4D1A70",
    }
})

//Funcion principal para registrar llaves en base de datos firebase-firestore
export default function ApiScreen({ navigation}) {

    //Variables apis
    const [values, setValues] = useState({
        api_publica: "",
        api_secreta: ""
    })

    //Esta funcion actualiza y toma lo que esta en la caja de texto
    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    //Esta funcion manda los datos obtenidos de las apis al backend (python)
    const insertLlaves = () =>{
        fetch('http://10.10.18.13:4000/obtener_apis', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({api_publica:values.api_publica, api_secreta:values.api_secreta})
        })
        .then(resp => resp.json())
        .catch(error => console.log(error))
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
    
    //Funcion para enviar las llaves a la base de datos de firebase
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
            
            <View >
                <Image  source={require('../Img/Icono_api.png')} style={styles.Icono_api} />
            </View> 

            <View style={styles.contTxtInstrucciones}>
                <Text style={[styles.txtInstrucciones,{fontSize:16} ]}>Instrucciones</Text>
            </View>

            <View style={styles.contInstrucciones}>
                <Text style={styles.txtInstrucciones}>
                    1. Ingresa a BINANCE y copia tus llaves
                </Text>
                <TouchableOpacity>
                    <Text style={styles.txtClick} onPress={() => Linking.openURL("https://www.binance.com/es")} >
                        ¡da click aqui!
                    </Text>
                </TouchableOpacity>
                <Text style={styles.txtInstrucciones}>
                    2.Si no tienes API ingresa a este Link y sigue los pasos 
                </Text>
                <TouchableOpacity>
                    <Text style={styles.txtClick}  onPress={() => Linking.openURL("https://www.youtube.com/watch?v=Tf_c8SL3FRc")} >
                        ¡da click aqui!
                    </Text>
                </TouchableOpacity>
            </View>

            <TextInput style={styles.textbox_keys} color ="black" placeholder="INGRESE API PUBLICA"  onChangeText={text => handleChange(text, "api_publica")} />
            <TextInput style={styles.textbox_keys } color ="black"  placeholder="INGRESE API SECRETA" placeholderTextColor="rgba(0, 0, 0, 0.28)" onChangeText={text => handleChange(text, "api_secreta")} />
            
            <View>
                <TouchableOpacity style={styles.btn_iniciar} onPress={() => Keys() + insertLlaves() }>
                    <Text style={styles.text_iniciar}>INICIAR</Text>
                </TouchableOpacity>    
            </View>
           

            <View style={styles.develop}>
                <Text style={{color:"#FBBA00",fontSize: 10,fontWeight: "700",}}>DEVELOPED BY CONDOR LAB</Text>
            </View>

        </ImageBackground>
    </View>
}