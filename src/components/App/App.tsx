import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import SeatingChart from '../../pages/SeatingChart';
import Header from '../Header';
import Home from '../../pages/Home';
import styles from './styles.scss';

const App = () : JSX.Element => (
    <div className={ styles.app }>
        <Router>
            <Header />
            <Switch>
                <Route path={ ROUTES.home } component={ Home } />
                <Route path={ ROUTES.seatingChart } component={ SeatingChart} />
            </Switch>
        </Router>
    </div>
);

export default App;