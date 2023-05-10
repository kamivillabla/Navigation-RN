import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#EAAFF4',
};

export const styles = StyleSheet.create({
  containerScreen: {
    backgroundColor: 'white',
    flex: 1,
  },
  containerScreenInner: {
    marginHorizontal: 20,
  },
  btnNavigation: {
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  btnPersons: {
    width: 150,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'orange',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 10,
  },
  btnPersonsText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuContainerBtn: {
    marginVertical: 10,
  },
  menuContainerText: {
    fontSize: 20,
  },
  containerIcons: {
    flexDirection: 'row',
  },
});
