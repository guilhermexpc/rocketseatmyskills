import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Button({myOnPress}) {
    return(
            <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={myOnPress}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems:'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#F4F4F4',
        fontSize: 17,
        fontWeight: 'bold',
    },
})
