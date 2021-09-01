import React from "react";
import { View, Text, Alert } from "react-native";
import {styles} from './styles';
import {Avatar} from '../avatar'
import { useAuth } from "../../hooks/auth";
import { RectButton } from "react-native-gesture-handler";

export function Profile() {

    const { user, singOut } = useAuth();

    return(
 
        <View style={styles.container}>
            <Avatar
            urlImage={user.avatar}
            />
            <View>
            <View style={styles.user}>
                <Text style={styles.greeting}>
                    Olá,
                </Text>

                <Text  style={styles.userName}>
                    {user.firstName}
                </Text>
            </View>

            <Text style={styles.message} >
                Hoje é dia de Vitória
            </Text>
            </View>

        </View>


    )


}