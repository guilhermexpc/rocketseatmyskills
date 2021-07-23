import React from 'react';
import { 
    StyleSheet, 
    Text,
    TouchableOpacity,
    TouchableOpacityProps
 } from 'react-native';

 // ButtonProps recebe todas as propriedade;
type ButtonPropstype = TouchableOpacityProps;
interface ButtonProps extends TouchableOpacityProps {
    tittle: string
};

export function Button({tittle, ...rest} : ButtonProps) {
    return(
            <TouchableOpacity
            style={styles.button}   
            activeOpacity={0.7}            
            {...rest}
        >
            <Text style={styles.buttonText}>{tittle}</Text>
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
