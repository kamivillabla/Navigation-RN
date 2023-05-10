import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/themeScreen';
import {useNavigation} from '@react-navigation/core';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Pagina2screen'> {}

export const Pagina2screen = ({navigation}: Props) => {
  const navi = useNavigation();

  // Cambia las opciones y se le puede cambiar el texto (En android se hace automatico pero sirve para ios)
  useEffect(() => {
    navi.setOptions({
      title: 'hola mundo',
      headerBackTitle: 'Atras',
    });
  }, [navi]);

  return (
    <View style={styles.containerScreen}>
      <View style={styles.containerScreenInner}>
        <Text style={styles.title}>PAGINA 2</Text>
        <Button
          title="Ir a pagina 3"
          onPress={() => navigation.navigate('Pagina3screen')}
        />
      </View>
    </View>
  );
};
