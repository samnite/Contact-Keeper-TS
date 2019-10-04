import React, { FunctionComponent, Fragment, useContext } from 'react';
import ContactItem from './contact-item';
import ContactContext, {
  ContactStateTypes
} from '../../context/contact/contact-context';

interface OwnProps {}

type Props = OwnProps;

const Contacts: FunctionComponent<Props> = props => {
  const contactContext = useContext<ContactStateTypes>(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contactItem={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
