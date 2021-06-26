import React, { useState, useCallback, useRef } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';

import { CategorySelect } from '../../components/CategorySelect';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { RectButton } from "react-native-gesture-handler";
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Load } from '../../components/Load';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENT } from '../../configs/database';
import { useAuth } from '../../hooks/auth';

export function Home() {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments ] = useState<AppointmentProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { user, singOut } = useAuth();

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  } 
  
  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected });
  } 
  
  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }  

  async function loadAppointments() {

    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if(category){

      setAppointments(storage.filter(item => item.category === category));
    } else {

      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <Background>
      <View style={styles.header}>
        <RectButton onPress={onOpen} >
          <Profile />
        </RectButton>
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>
    
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
    
      {

        loading ? <Load/> :

      <>
        <ListHeader 
          title="Partidas agendadas"
          subtitle={`Total ${appointments.length}`}
        />

        <FlatList 
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment 
              data={item} 
              onPress={() => handleAppointmentDetails(item)}
            />            
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </>
      }

      <Modalize
      ref={modalizeRef}
      snapPoint={150}
      modalHeight={150}
      HeaderComponent={
       <View style={styles.modalHeader}>
        <Text style={styles.ModalText}>Deseja sair do GAMEPLAY ?</Text>
      </View>
      }
      >
        <View style={styles.modalView}>

        <RectButton style={styles.modalViewBtnClose} onPress={onClose}>
          <Text style={styles.modalOptions} >Não</Text>
        </RectButton>

        <RectButton style={styles.modalViewBtn}  onPress={singOut}>
          <Text style={styles.modalOptions} >Sim</Text>
        </RectButton>

        </View>
       
      </Modalize>
    
        

    </Background>
  ); 
}