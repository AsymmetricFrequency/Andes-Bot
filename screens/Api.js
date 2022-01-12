import React, { useState } from 'react'
import { Text, View, StyleSheet,ImageBackground,TextInput } from "react-native"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";





//Estilos 

const styles = StyleSheet.create({
    view: {
        flex: 2,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        
        
    },
    fondo:{
        flex: 2,
        height:'100%',
        width: '100%',
        resizeMode:'contain',
        alignItems:'center', 
        justifyContent: "center",
        marginBottom: "-10%"   
        
    },
    textbox_keys:{
        top:"7%",
        height: 42,
        width: "92%",
        borderRadius: 10,
        marginTop: 25,
        alignItems: "center",
        borderColor:'#4D1A70',
        borderWidth: 1,
        paddingLeft: 6
    },

    develop:{ 
    marginBottom: 20 , 
    textAlign:"center",
    top:'32%'
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
            navigation.navigate("Configuracion_bot")
        
                .then(() => {
                     
                })
                
                .catch((error) => {
                    alert(error.message)
                    // ..
                });
        } else {
            alert("Porfavor ingrese la llaves ")
        }
     

    }

    //Front pagina para registrar llaves 

    return <View style={styles.view}>

        <ImageBackground source={require('../Img/fondo_keys.png')} style={styles.fondo}>

            <TextInput style={styles.textbox_keys} color ="black" placeholder="INGRESE API PUBLICA" placeholderTextColor="rgba(0, 0, 0, 0.28)" onChangeText={text => handleChange(text, "api_publica")} />
            <TextInput style={styles.textbox_keys } color ="black"  placeholder="INGRESE API SECRETA" placeholderTextColor="rgba(0, 0, 0, 0.28)" onChangeText={text => handleChange(text, "api_secreta")}  />
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "92%", }}>
                <Btn onClick={() => Keys() } title="INICIAR" style={{ width: "50%",backgroundColor: "#FBBA00",top:"25%",fontSize: 30 }} />    
            </View>

            <View style={styles.develop}>
                <Text style={{color:"#FBBA00",fontSize: 10,fontWeight: "700",}}>DEVELOPED BY CONDOR COIN</Text>
            </View>


        </ImageBackground>
    </View>
}