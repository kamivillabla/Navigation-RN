import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/themeScreen';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={styles.containerScreen}>
      <View style={styles.containerScreenInner}>
        <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
      </View>
    </View>
  );
};
