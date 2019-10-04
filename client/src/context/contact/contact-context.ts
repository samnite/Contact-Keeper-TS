import { createContext } from 'react';

interface Methods {}

interface Contact {
  name?: string;
  id?: string | number;
  email?: string;
  phone?: string;
  type?: string;
}

interface Contacts extends Contact {
  contacts: ContactStateTypes[];
}

export interface ContactStateTypes extends Contacts {
  contact?: {
    name: string;
    id: string | number;
    email: string;
    phone: string;
    type: string;
  };
  addContact: (contact: Contact) => void;
}

const ContactContext = createContext({} as ContactStateTypes);

export default ContactContext;
