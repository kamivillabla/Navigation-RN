import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/themeScreen';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{...styles.containerScreen, marginTop: insets.top}}>
      <Text style={styles.title}>SettingsScreen</Text>
    </View>
  );
};
