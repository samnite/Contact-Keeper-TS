import React, { FunctionComponent, Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition timeout={500} classNames="item" key={contact.id}>
                <ContactItem contactItem={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition timeout={500} classNames="item" key={contact.id}>
                <ContactItem contactItem={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
