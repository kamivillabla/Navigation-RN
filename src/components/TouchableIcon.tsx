import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  const {changeFavoriteIcon} = useContext(AuthContext);

  return (
    <View>
      <Text>TouchableIcon</Text>
      <TouchableOpacity
        onPress={() => {
          changeFavoriteIcon(iconName);
        }}>
        <Icon name={iconName} size={60} color={'#EAAFF4'} />
      </TouchableOpacity>
    </View>
  );
};
