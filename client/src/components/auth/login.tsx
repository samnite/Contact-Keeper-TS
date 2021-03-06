import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState
} from 'react';
import AuthContext from '../../context/auth/auth-context';
import AlertContext from '../../context/alert/alert-context';
import { History, LocationState } from 'history';
import validator from 'validator';

interface OwnProps {
  history: History<LocationState>;
}

type Props = OwnProps;

const Login: FunctionComponent<Props> = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = (e: any) =>
    setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    // Special for Mr. Punk implemented email validator
    if (!validator.isEmail(email)) {
      setAlert('Please enter a correct email', 'danger');
    } else {
      login({ email, password });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
