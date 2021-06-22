import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { Profile } from '../../components/Profile';
import {ListDivider} from '../../components/ListDivider';


import {Background} from '../../components/Background';
import { styles } from './style';

const appointments = [
  {
    id: '1',
    guild: {
      id: '1',
      name: 'Boleiros',
      icon: null,
      owner: true
    },
    category: '1',
    date: '27/06 às 14:30h',
    description: 'Fifa Ultimate team'
  },
  {
    id: '2',
    guild: {
      id: '1',
      name: 'Survivors',
      icon: null,
      owner: false
    },
    category: '1',
    date: '23/06 às 21:00h',
    description: 'Live do Nathan'
  }
]

export function Home() {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader
            title="Partidas agendadas"
            subTitle="Total 6"
          />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider/>}
            style={styles.matches}
            showsHorizontalScrollIndicator={false}
          />

        </View>
      </View>
    </Background>
  )

}