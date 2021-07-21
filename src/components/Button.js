import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export function Button() {
    <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
    >
        <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
}

