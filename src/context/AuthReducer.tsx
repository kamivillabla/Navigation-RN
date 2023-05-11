/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn '}
  | {type: 'changeFavIcons'; payload: string}
  | {type: 'changeUserName'; payload: string}
  | {type: 'logout'};

// genera estado
export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn ':
      return {
        // nunca mutar los estados
        ...state,
        isLoggedIn: true,
        userName: 'no-username-yet',
      };
    case 'logout':
      return {
        // nunca mutar los estados
        ...state,
        isLoggedIn: false,
        userName: 'undefined',
        favoriteIcon: 'undefined',
      };
    case 'changeFavIcons':
      return {
        // nunca mutar los estados
        ...state,
        favoriteIcon: action.payload,
      };
    case 'changeUserName':
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
};
