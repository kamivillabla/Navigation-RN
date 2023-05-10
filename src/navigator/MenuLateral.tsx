/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import 'react-native-gesture-handler';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';
import {styles} from '../theme/themeScreen';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  const isLargeScreen = width >= 768;

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: isLargeScreen ? 'permanent' : 'back',
        // drawerStyle: isLargeScreen ? null : {width: '100%'},
        overlayColor: 'transparent',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://w7.pngwing.com/pngs/873/489/png-transparent-avatar-youtube-cat-cute-dog-heroes-cat-like-mammal-carnivoran-thumbnail.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={{
            ...styles.menuContainerBtn,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text>
            <Icon name="compass-outline" size={20} color={'#EAAFF4'} />;
          </Text>
          <Text style={styles.menuContainerText}>Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={{
            ...styles.menuContainerBtn,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text>
            <Icon name="compass-outline" size={20} color={'#EAAFF4'} />;
          </Text>
          <Text style={styles.menuContainerText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
