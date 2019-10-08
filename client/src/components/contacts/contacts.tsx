import React, {
  FunctionComponent,
  Fragment,
  useContext,
  useEffect
} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './contact-item';
import ContactContext, {
  ContactStateTypes
} from '../../context/contact/contact-context';
import Spinner from '../layout/spinner';

interface OwnProps {}

type Props = OwnProps;

const Contacts: FunctionComponent<Props> = () => {
  const contactContext = useContext<ContactStateTypes>(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => (
                <CSSTransition
                  timeout={500}
                  classNames="item"
                  key={contact._id}
                >
                  <ContactItem contactItem={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  timeout={500}
                  classNames="item"
                  key={contact._id}
                >
                  <ContactItem contactItem={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
