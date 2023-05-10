import React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/themeScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Pagina1screen'> {}

export const Pagina1screen = ({navigation}: Props) => {
  return (
    <View style={styles.containerScreen}>
      <View style={styles.containerScreenInner}>
        <Text style={styles.title}>PAGINA 1</Text>
        <Button
          title="Ir a página 2"
          onPress={() => navigation.navigate('Pagina2screen')}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.btnPersons}
            onPress={() =>
              navigation.navigate('PersonaScreen', {
                id: 1,
                name: 'pedro',
                age: 30,
              })
            }>
            <Text style={styles.btnPersonsText}>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnPersons}
            onPress={() =>
              navigation.navigate('PersonaScreen', {
                id: 2,
                name: 'Isa',
                age: 23,
              })
            }>
            <Text style={styles.btnPersonsText}>Isa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
