import React from 'react';
import { Text, 
    StyleSheet, 
    TouchableOpacity,
    TouchableOpacityProps
 } from 'react-native';

 interface SkillCardProps extends TouchableOpacityProps {
     mySkill: string
 }

export function SkillCard({mySkill, ...rest} : SkillCardProps) {
    return (
        <TouchableOpacity 
            style={styles.buttonSkill}
        >
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