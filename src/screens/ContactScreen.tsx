import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/themeScreen';
import {AuthContext} from '../context/AuthContext';

export const ContactScreen = () => {
  const {
    singIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={styles.containerScreen}>
      <Text>ContactScreen</Text>
      {/* // si esto no esta en true o es distinto a true entonces and = muestra el
      boton */}
      {!isLoggedIn && <Button title="SingIn" onPress={singIn} />}
    </View>
  );
};
