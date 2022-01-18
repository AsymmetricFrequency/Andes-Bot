//Pantalla de Iniciar Sesion

//importaciones
import React, { useState } from 'react'
import { TextInput, Text, View, StyleSheet,ImageBackground,TouchableOpacity,Image  } from "react-native"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

//Estilos
const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        height:'100%',
        justifyContent: "center",
        alignItems: "center",
        alignContent:"center"
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

    btn_login:{
        top:60,
        width: "60%",
        height:'30%',
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FBBA00",
        borderRadius:20
    },

    text_login:{
        fontSize: 20,
        fontWeight:'bold',
        color:"#4D1A70"
    },

    develop:{ 
        marginBottom: 20 , 
        textAlign:"center",
        top:'15%'
    },

    logo :{
        alignItems:"center",
        top:'-5%',
        marginBottom:'-20%'
    },

    Imagenlogo:{
        resizeMode:'contain',
        width:150,
        height:150
    },

    textbox_input:{
        position:'relative',
        top:80,
        marginTop:5,
        height: 42,
        width: "92%",
        borderRadius: 10,
        alignItems: "center",
        borderColor:'#4D1A70',
        borderWidth: 1,
        paddingLeft: 6,
        backgroundColor: '#fff'
    }
})

//Funcion principal del login
export default function LoginScreen() {

    //Se declara las variables del email y pasword
    const [values, setValues] = useState({
        email: "",
        pwd: ""
    })

    //funcion que toma y cambia lo que esta en los text de email y pwd
    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    //Funcion de logeo
    function Login() {

        const { email, pwd } = values

        if( email === ""  ){
            alert("Porfavor escriba su correo")
        }
        if( pwd === ""  ){
            alert("Porfavor escriba su contraseña")
        }

        if (validadorCorreo(email) == true){
            firebase.auth().signInWithEmailAndPassword(email, pwd) 
            
            .catch((error) => {
                console.log(error.message)
            });
        }
    }

    //Front
    return <View style={styles.view}>
        <ImageBackground source={require('../Img/fondo_simple.png')} style={styles.fondo}>
            
            <View style={styles.logo}>
                <Image style={styles.Imagenlogo} source={require('../Img/logo_condor.png')}/>
            </View>

            <View style={{marginTop: 50, marginBottom:30}} >
                <Text style={{ fontSize: 30, fontWeight: "700", marginBottom: 20 , color: "#FBBA00" }}>
                    ANDES BOT
                </Text>
            </View>
            
            <View style={{justifyContent: "center", alignItems: "center", width: "93%", marginTop: 20}}> 
                <TextInput style={styles.textbox_input}  placeholder="CORREO ELECTRONICO" onChangeText={text => handleChange(text, "email")} />
                <TextInput style={styles.textbox_input}  placeholder="CONTRASEÑA" onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} />
            </View>
            
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "93%" }}>
                <TouchableOpacity style={styles.btn_login} onPress={() => Login()}>
                    <Text style={styles.text_login}>
                        ACCESO
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.develop}>
                <Text style={{color:"#FBBA00",fontSize: 10,fontWeight: "700",}}>
                    DEVELOPED BY CONDOR LAB
                </Text>
            </View>

        </ImageBackground>
      
    </View>
}