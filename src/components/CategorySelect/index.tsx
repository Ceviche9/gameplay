import React from "react";
import { ScrollView} from "react-native";
import { styles } from "./styles";
import {categories} from '../../utils/categories';
import {Category} from '../Category';

type Props ={

    categorySelected: string;
    setCategory: (CategoryId: string) => void;
    hasCheckBox?: Boolean;

}


export function CategorySelect({
    categorySelected,
    setCategory,
    hasCheckBox = false
  }: Props) {
    return (
        <ScrollView  
          horizontal
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 40 }}
        >
        {
          categories.map(category => (
            <Category
              key={category.id}
              title={category.title}
              icon={category.icon}
              checked={category.id === categorySelected}
              onPress={() => setCategory(category.id)}
              hasCheckBox={hasCheckBox}
            />
          ))
        }
  
        </ScrollView>
  
    )
  }