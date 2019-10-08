import React, { FunctionComponent } from 'react';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';
import { Contact, ContactStateTypes } from './contact-context';

//@ts-ignore
export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact: Contact) =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact: ContactStateTypes) => contact.id != action.payload
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT: {
      return {
        ...state,
        current: null
      };
    }
    case FILTER_CONTACT: {
      return {
        ...state,
        filtered: state.contacts.filter(
          (contact: {
            phone: string;
            name: string;
            type: string;
            email: string;
          }) => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return contact.name.match(regex) || contact.email.match(regex);
          }
        )
      };
    }
    case CLEAR_FILTER: {
      return {
        ...state,
        filtered: null
      };
    }
    case CONTACT_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
};
