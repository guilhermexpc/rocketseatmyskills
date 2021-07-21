import React, { useState }from 'react'
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native'

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
    const [newSkill, setNewSkill] = useState('');   
    const [mySkills, setMySkills] = useState([]);

function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill])
}

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Welcome, Guilherme</Text>
            <TextInput 
                style={styles.input} 
                placeholder= "New Skill"
                placeholderTextColor= "#777"           
                onChangeText={setNewSkill}
            />   

            <Button 
                myOnPress={handleAddNewSkill}         
            />

            <Text style={[styles.tittle,  {marginVertical: 50}]}>
               My Skill
            </Text>

            {
                mySkills.map(skill => (
                    <SkillCard 
                        mySkill={skill}
                    />
                ))             
            }
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,

    },
    tittle: {
        color: '#F4F4F4',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#F4F4F4',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    }
})   