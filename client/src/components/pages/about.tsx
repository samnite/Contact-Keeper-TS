import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const About: FunctionComponent<Props> = props => {
  return (
    <div>
      <h1>About this app</h1>
      <p className="my-1">
        This is a full stack React app for keeping contacts
      </p>
      <p className="bg-dark p">
        <strong>Version:</strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
