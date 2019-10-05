import React, { FunctionComponent } from 'react';
import Contacts from '../contacts/contacts';
import ContactForm from '../contacts/contact-form';
import ContactFilter from '../contacts/contact-filter';

interface OwnProps {}

type Props = OwnProps;

const Home: FunctionComponent<Props> = props => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
