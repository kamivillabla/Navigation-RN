import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/themeScreen';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {
    logout,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View style={styles.containerScreen}>
      <Text>AlbumsScreen</Text>
      {isLoggedIn && <Button title="logout" onPress={logout} />}
    </View>
  );
};
