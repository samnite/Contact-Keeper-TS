import React, { FunctionComponent, useReducer } from 'react';
import axios from 'axios';
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
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';
import Config from '../../utils/config';

interface OwnProps {
  children: any;
}

type Props = OwnProps;

const ContactState = (props: Props) => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
    error: null
  };
  //@ts-ignore
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = async (contact: {
    phone: string;
    name: string;
    type: string;
    email: string;
    id?: string;
  }) => {
    try {
      const res = await axios.post('api/contacts', contact, Config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
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
        error: state.error,
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
