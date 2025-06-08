import classes from './Header.module.css';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <div className={classes.header}>
          <h1>
            <span className={classes.h1black}>Formular </span>
            <span className={classes.h1red}>Aplikimi</span>
          </h1>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
    )
}