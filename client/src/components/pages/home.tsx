import React, { FunctionComponent, useContext, useEffect } from 'react';
import Contacts from '../contacts/contacts';
import ContactForm from '../contacts/contact-form';
import ContactFilter from '../contacts/contact-filter';
import AuthContext from '../../context/auth/auth-context';

interface OwnProps {}

type Props = OwnProps;

const Home: FunctionComponent<Props> = props => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
