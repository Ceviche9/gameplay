import React from 'react';
import { 
  View, 
  Text, 
  Image,  
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';



export function SignIn(){

  const navigation = useNavigation();
  
  function handleSingIn(){

    navigation.navigate('Home');


  }
  return(
    <View style={styles.container}>
      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`} 
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`} 
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title="Entrar com Discord"
          onPress={handleSingIn}
        />                
               
      </View>
    </View>
  );
}