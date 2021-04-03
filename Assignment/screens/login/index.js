import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const { lable, container } = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        padding: 20
    },
    lable: {
        color: "red",
        textAlign: "center",
        fontSize: 30
    }
});

const DoLogin = (props) => {
    const [text,setText]= useState('');

    const update = name => {
        setText(name)
    }
    const alert = () => {
        if (!text) {
            Alert.alert('Please enter user name');
        } else {
            console.log('Login sucess');
        }
    }
    return <>
    <View style={container}>
        <View style={{
            padding: 20
        }}><Text style={lable}>{props.message}</Text></View>
        <View style={{
            padding: 20
        }}><TextInput
            style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                width: 300
            }}
            defaultValue="Enter name" value={text} onChangeText={update}
        /></View>
        <View style={{
            padding: 20
        }}><Button title="Login" onPress={alert} /></View>
    </View>
    </>
}

export const Login = () => <View>
<DoLogin message="User" />
</View>

//default Property
Login.defaultProps = {
    message: 'user'
}