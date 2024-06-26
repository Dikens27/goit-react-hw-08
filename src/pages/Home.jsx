import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.mainBlock}>
      <div className={css.blochok}>
        <p className={css.text}>
          Hello, this is a phone book. Here you can save, edit and delete your
          contacts.
        </p>
        {!isLoggedIn && (
          <p className={css.textLast}>
            If you want to see a your phone numbers, please to{' '}
            <Link className={css.link} to="/register">
              Register
            </Link>{' '}
            or{' '}
            <Link className={css.link} to="/login">
              Login
            </Link>{' '}
            in this application.
          </p>
        )}
      </div>
    </div>
  );
}
