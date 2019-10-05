import React, { FunctionComponent, Fragment, useContext } from 'react';
import ContactItem from './contact-item';
import ContactContext, {
  ContactStateTypes
} from '../../context/contact/contact-context';

interface OwnProps {}

type Props = OwnProps;

const Contacts: FunctionComponent<Props> = () => {
  const contactContext = useContext<ContactStateTypes>(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactItem key={contact.id} contactItem={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contactItem={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
