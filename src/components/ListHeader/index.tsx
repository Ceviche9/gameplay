import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import {ButtonAdd} from '../../components/ButtonAdd'
import {CategorySelect} from '../../components/CategorySelect';

type Props = {

    title: string;
    subTitle: string;

}

export function ListHeader({title, subTitle}: Props) {

    return (

        <View style={styles.container} >
            <Text style={styles.title} >{title}</Text>


            <Text style={styles.subTitle} >{subTitle}</Text>
        </View>


    );

}