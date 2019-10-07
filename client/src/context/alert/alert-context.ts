import { createContext } from 'react';

export interface Alert {
  msg?: string;
  type?: string;
  id?: string;
}

interface AlertStateTypes extends Alert {
  setAlert: (msg: string, type: string) => void;
  alerts: Alert[];
}

const AlertContext = createContext({} as AlertStateTypes);

export default AlertContext;
