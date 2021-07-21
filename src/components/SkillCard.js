import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export function SkillCard() {
    return (
        <TouchableOpacity key={"1"} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                skill
            </Text>
        </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#F4F4F4',
        fontSize: 17,
        fontWeight: 'bold',
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    }
})