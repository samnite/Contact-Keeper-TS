import React, { FunctionComponent, useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contact-context';

const ContactFilter: FunctionComponent = () => {
  const contactContext = useContext(ContactContext);
  //@ts-ignore
  const text = useRef<HTMLInputElement>('');
  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });
  const onChange = (e: any) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts (name/email)..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
