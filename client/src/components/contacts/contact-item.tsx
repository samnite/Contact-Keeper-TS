import React, { FunctionComponent } from 'react';
import { ContactStateTypes } from '../../context/contact/contact-context';

interface OwnProps {
  contactItem: ContactStateTypes;
}

type Props = OwnProps;

const ContactItem: FunctionComponent<Props> = ({ contactItem }) => {
  //@ts-ignore
  const { name, id, email, phone, type } = contactItem;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type && type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            {' '}
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

export default ContactItem;
