/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-labels */
import React, {createContext, useReducer} from 'react';
import {AuthReducer} from './AuthReducer';

// Como se vera la información
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};
// Lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  singIn: () => void;
  logout: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUserName: (username: string) => void;
}

// crear contexto
export const AuthContext = createContext({} as AuthContextProps);

// componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

  // dispatch para que modifique al estado
  const singIn = () => {
    dispatch({type: 'signIn '});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcons', payload: iconName});
  };
  const changeUserName = (username: string) => {
    dispatch({type: 'changeUserName', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        singIn,
        changeFavoriteIcon,
        logout,
        changeUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
