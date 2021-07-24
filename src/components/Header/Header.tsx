import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import styles from './styles.scss';

const Header = () : JSX.Element => (
    <div className={ styles.header }>
        <Link className={ styles.logo } to={ ROUTES.home }>
            <img src={ 'https://twinny.ai/assets/images/logo.png' } />
        </Link>
    </div>
);

export default Header;