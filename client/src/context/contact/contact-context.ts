import { createContext } from 'react';

interface Methods {
  addContact: (contact: {
    phone: string;
    name: string;
    type: string;
    email: string;
  }) => void;
  deleteContact: (id: string) => void;
  setCurrent: (contact: Contact) => void;
  clearCurrent: () => void;
  filterContacts: (text: string) => void;
  clearFilter: () => void;
  updateContact: (contact: {
    phone: string;
    name: string;
    type: string;
    email: string;
  }) => void;
}

export interface Contact extends Methods {
  name?: string;
  _id?: string;
  id?: string;
  email?: string;
  phone?: string;
  type?: string;
}

interface Contacts extends Contact {
  contacts: ContactStateTypes[];
  current: Contact | null;
  filtered: ContactStateTypes[] | null;
  error: string;
}

export interface ContactStateTypes extends Contacts {
  contact?: {
    name: string;
    id: string | number;
    email: string;
    phone: string;
    type: string;
  };
}

const ContactContext = createContext({} as ContactStateTypes);

export default ContactContext;
