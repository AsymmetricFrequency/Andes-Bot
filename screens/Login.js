import React, { useState } from 'react'
import { Text, View, StyleSheet,ImageBackground,TouchableOpacity,Image  } from "react-native"
import TextBox from "../components/TextBox"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


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
        color:"#4D1A70",

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
    }

    
})

export default function LoginScreen({navigation}) {

    const [values, setValues] = useState({
        email: "",
        pwd: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function Login() {

        const { email, pwd } = values
        firebase.auth().signInWithEmailAndPassword(email, pwd)
            
        
        
            .then(() => {

            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    }

    

    return <View style={styles.view}>
        <ImageBackground source={require('../Img/fondo_simple.png')} style={styles.fondo}>
            
            <View style={styles.logo}>
                <Image style={styles.Imagenlogo} source={require('../Img/logo_condor.png')}/>
            </View>
            <View style={{marginTop: 50, marginBottom:30}} >
                <Text style={{ fontSize: 30, fontWeight: "700", marginBottom: 20 , color: "#FBBA00" }}>ANDES BOT</Text>
            </View>
            
            <View style={{justifyContent: "center", alignItems: "center", width: "93%", marginTop: 20}}> 
                <TextBox  placeholder="CORREO ELECTRONICO" onChangeText={text => handleChange(text, "email")} />
                <TextBox placeholder="CONTRASEÑA" onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} />
            </View>
            
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "93%" }}>
                
                <TouchableOpacity style={styles.btn_login} onPress={() => Login()}>
                    <Text style={styles.text_login}>ACCESO</Text>
                </TouchableOpacity>
                
            </View>
            <View>
                <Text></Text>
            </View>
            <View style={styles.develop}>
                <Text style={{color:"#FBBA00",fontSize: 10,fontWeight: "700",}}>DEVELOPED BY CONDOR COIN</Text>
            </View>


        </ImageBackground>

            
    </View>
}