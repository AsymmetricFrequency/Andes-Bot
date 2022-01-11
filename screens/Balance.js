import React from 'react'
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity, } from 'react-native'
import {FontAwesome5} from '@expo/vector-icons';

export default function Balance({navigation}) {
    return (
        <View style={styles.view}>
            <ImageBackground source={require('../Img/fondo_balance.png')} style={styles.fondo}>
                <View style={styles.containerBalance} >
                        <TouchableOpacity style={styles.iconreturn}>
                            <FontAwesome5 name="angle-double-left" size={30} color={"#FBBA00"} onPress={()=> navigation.navigate("Moneda")}  />
                        </TouchableOpacity>
                         <Text style={styles.textBalance}>BALANCE</Text>
                </View>
                
            </ImageBackground>
        </View>
    )
}

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

    containerBalance:{

        flexDirection:"row",

    },

    iconreturn:{
        //alignItems:"center",
        width:"20%",
        marginTop:"26.5%",

    },



    textBalance:{
        width:"53%",
        color:"#FBBA00",
        marginTop:"25%",
        fontSize: 30,
        fontWeight:"bold"


    }
})
