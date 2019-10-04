import { createContext } from 'react';

interface Methods {
  addContact: (contact: Contact) => void;
  deleteContact: (id: string) => void;
  setCurrent: (contact: Contact) => void;
  clearCurrent: () => void;
}

export interface Contact extends Methods {
  name?: string;
  id?: string;
  email?: string;
  phone?: string;
  type?: string;
}

interface Contacts extends Contact {
  contacts: ContactStateTypes[];
  current: Contact | null;
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
