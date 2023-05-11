import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/themeScreen';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tabs1Screen = () => {
  return (
    <View style={styles.containerScreen}>
      <Text style={styles.title}>Iconos</Text>

      <View style={styles.containerIcons}>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="game-controller-outline" />
        <TouchableIcon iconName="heart-half-outline" />
      </View>
    </View>
  );
};
