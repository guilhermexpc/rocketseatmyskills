import React, { useEffect, useState }from 'react'
import { 
        View, 
        Text, 
        TextInput, 
        StyleSheet, 
        Platform,
        FlatList
    } from 'react-native'

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
    date?: Date;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');   
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [greeting, setGreeting] = useState('')


    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getDate),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data])
    }

    useEffect( () => {
        console.log('useEffect Executado')
    }, [mySkills])

    useEffect(() =>{
        const currentHour = new Date().getHours();
        console.log(currentHour)
        if(currentHour < 12){
            setGreeting('Goog morning')
        }
        else if (currentHour < 18) {
            setGreeting('Goog afternoon')
        }
        else {
            setGreeting('Good Night')
        }
    },[mySkills])


    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Welcome, Guilherme</Text>

            <Text style={styles.greetings}>
                 { greeting }
            </Text>

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

            <FlatList
                data={mySkills}
                keyExtractor={ item => item.id }
                renderItem={({ item }) => (
                    <SkillCard                         
                        mySkill={ item.name } 
                    />
                )}
            />

            {/* {
                mySkills.map(skill => (
                    <SkillCard 
                        key={mySkill}
                        mySkill={skill} 
                    />
                ))             
            } */}
           
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
    greetings: {
        color: '#f4f4f4'
    }
})   