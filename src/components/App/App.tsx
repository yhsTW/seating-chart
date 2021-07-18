import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import SeatingChart from '../../pages/SeatingChart';
import styles from './styles.scss';

const App = () : JSX.Element => (
    <div className={ styles.app }>
        <Router>
            <Switch>
                <Route path={ ROUTES.home } component={ SeatingChart } />
                <Route path={ ROUTES.seatingChart } component={ SeatingChart} />
            </Switch>
        </Router>
    </div>
);

export default App;