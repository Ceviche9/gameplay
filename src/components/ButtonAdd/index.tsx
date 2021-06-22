import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { theme } from '../../global/styles/theme';
import {styles} from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
    
export function ButtonAdd({...rest}: RectButtonProps) {

    return(

        <RectButton
        style={styles.container}
        {...rest}
        >

        <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
        />

        
        </RectButton>


    )


}