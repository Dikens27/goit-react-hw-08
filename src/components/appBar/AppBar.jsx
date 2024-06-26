import css from './AppBar.module.css';
import Navigation from '../navigation/Navigation';
import AuthNav from '../authNav/AuthNav';
import UserMenu from '../userMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
