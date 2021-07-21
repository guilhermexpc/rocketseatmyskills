import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export function SkillCard({mySkill}) {
    return (
        <TouchableOpacity key={mySkill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                {mySkill}
            </Text>
        </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({    
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#F4F4F4',
        fontSize: 22,
        fontWeight: 'bold'
    }
})