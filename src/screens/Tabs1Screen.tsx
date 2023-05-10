import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/themeScreen';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs1Screen = () => {
  return (
    <View style={styles.containerScreen}>
      <Text style={styles.title}>Iconos</Text>

      <View style={styles.containerIcons}>
        <Icon name="airplane-outline" size={60} color={'#EAAFF4'} />
        <Icon name="game-controller-outline" size={60} color={'#EAAFF4'} />
        <Icon name="heart-half-outline" size={60} color={'#EAAFF4'} />
      </View>
    </View>
  );
};
