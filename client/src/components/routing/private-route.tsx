import React, { FunctionComponent, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/auth-context';

interface OwnProps {
  component: any;
  exact: boolean;
  path: string;
}

type Props = OwnProps;

const PrivateRoute: FunctionComponent<Props> = ({
  component: Component,
  ...rest
}) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to="login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
