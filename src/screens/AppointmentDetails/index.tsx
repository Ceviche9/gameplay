import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
  ImageBackground,
  Text,
  View,
  FlatList
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import BannerImg from '../../assets/banner.png';

import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import {Member} from '../../components/Member';
import { Header } from '../../components/Header';

export function AppointmentDetails(){
  const members = [
    {
      id: '1',
      username: 'Tundê',
      avatar_url: 'https://github.com/Ceviche9.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Dudu',
      avatar_url: 'https://github.com/dudubernardino.png',
      status: 'offline'
    },
    {
      id: '3',
      username: 'Nathan',
      avatar_url: 'https://github.com/nathan-mascarenhas.png',
      status: 'offline'
    }
  ]
  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>  
            Boleiros
          </Text>
            
          <Text style={styles.subtitle}>
            Fifa Ultimate team, o desafio é chegar na primeira divisão
          </Text>
        </View>   
      </ImageBackground>

        <ListHeader
        title={'Jogadores'}
        subTitle={'Total 3'}
        />

        <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <Member
            data={item}/>
        )}
        ItemSeparatorComponent={() => <ListDivider/>}
        style={styles.members}
        />

        <View style={styles.footer} >
            <ButtonIcon
            title={'Entrar na Call'}
            />
        </View>

    </Background>
  );
}