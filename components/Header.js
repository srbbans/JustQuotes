import React from 'react'
import { StyleSheet, NativeModules, Text, View } from 'react-native';

const Header = ( props ) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 100,
        width: '100%',
        padding: 15,
    },
    text:{
        color:"#ffffff",
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Header
