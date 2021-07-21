import React, { useState }from 'react'
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native'

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

            <Text style={[styles.tittle,  {marginVertical: 50}]}>
               My Skill
            </Text>

            {
                mySkills.map(skill => (
                    <TouchableOpacity key={skill} style={styles.buttonSkill}>
                        <Text style={styles.textSkill}>
                            {skill}
                        </Text>
                    </TouchableOpacity>
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
    },
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