import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Loading() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Getting the weather</Text>
    </View>
    );
}

const styles=StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 50,
        paddingVertical: 100,
        backgroundColor: '#df6aaa'
    },
    text: {
        color: 'green',
        fontSize: 40
    }
});