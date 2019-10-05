import React, { FunctionComponent, useReducer } from 'react';
import uuid from 'uuid';
import ContactContext, { Contact, ContactStateTypes } from './contact-context';
import contactReducer from './contact-reducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER
} from '../types';

interface OwnProps {
  children: any;
}

type Props = OwnProps;

const ContactState = (props: Props) => {
  const initialState = {
    contacts: [
      {
        id: '1',
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: '2',
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '222-222-2222',
        type: 'personal'
      },
      {
        id: '3',
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '333-333-3333',
        type: 'professional'
      }
    ],
    current: null,
    filtered: null
  };
  //@ts-ignore
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = (contact: {
    phone: string;
    name: string;
    type: string;
    email: string;
    id?: string;
  }) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact
  const deleteContact = (id: string) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // Set Current Contact
  const setCurrent = (contact: Contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Contact
  const updateContact = (contact: {
    phone: string;
    name: string;
    type: string;
    email: string;
    id?: string;
  }) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // Filter Contacts
  const filterContacts = (text: string) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
