import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState
} from 'react';
import ContactContext from '../../context/contact/contact-context';
import validator from 'validator';
import AlertContext from '../../context/alert/alert-context';

const ContactForm: FunctionComponent = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (current !== null) {
      //@ts-ignore
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const clearAll = () => {
    clearCurrent();
  };

  const { name, email, phone, type } = contact;

  const onChange = (e: any) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      setAlert('Please enter a correct email', 'danger');
    } else {
      if (current === null) {
        addContact(contact);
      } else {
        updateContact(contact);
      }
      setContact({ name: '', email: '', phone: '', type: 'personal' });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Contact' : 'Add contact'}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      />
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      />
      Professional
      <div>
        <input
          type="submit"
          value={current ? 'Update Contact' : 'Add contact'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
