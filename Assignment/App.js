import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Login } from './screens/login/index';

const { container } = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 100
    },
});

const App = () => {
    return <View style={container}>
        <Login message="User" />
    </View>
    
}

export default App;