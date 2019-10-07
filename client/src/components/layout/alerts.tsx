import React, { FunctionComponent, useContext } from 'react';
import AlertContext, { Alert } from '../../context/alert/alert-context';

interface OwnProps {}

type Props = OwnProps;

//@ts-ignore
const Alerts: FunctionComponent<Props> = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
