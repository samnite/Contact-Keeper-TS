import React, { FunctionComponent, Fragment } from 'react';
import spinner from './spinner-img.gif';

const Spinner: FunctionComponent = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Spinner;
