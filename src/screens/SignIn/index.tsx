import React from 'react';
import { 
  View, 
  Text, 
  Image,
  ActivityIndicator,
  Alert  
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon';
import {Background} from '../../components/Background';

import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';



export function SignIn(){

  const {loading, signIn} = useAuth();

  async function handleSingIn(){

    try{

      await signIn();
    }
    catch(e){

    }
  
  }

  return(
    <Background>
      <View style={styles.container}>
        <Image 
          source={IllustrationImg} 
          style={styles.image} 
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Organize 
            suas jogatinas 
            facilmente
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`} 
            favoritos com seus amigos
          </Text>

        {
          loading ? <ActivityIndicator color={theme.colors.primary}/> : 
          <ButtonIcon 
            title="Entrar com Discord"
            onPress={handleSingIn}
          />                
        }       
        </View>
      </View>
    </Background>
  );
}