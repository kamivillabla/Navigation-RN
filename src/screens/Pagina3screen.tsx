import React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/themeScreen';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Pagina3screen'> {}

export const Pagina3screen = ({navigation}: Props) => {
  return (
    <View style={styles.containerScreen}>
      <View style={styles.containerScreenInner}>
        <Text style={styles.title}>PAGINA 3</Text>
        <Button title="Regresar" onPress={() => navigation.pop()} />
        <Button title="Ir al home" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};
