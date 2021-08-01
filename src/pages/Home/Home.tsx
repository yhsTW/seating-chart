import React from 'react';
import CreateSpace from '../../components/CreateSpace';
import Spaces from '../../components/Spaces';
import PLUS from '../../../images/icon-create.svg';
import styles from './styles.scss';

const Home = () => {

    return (
        <div className={ styles.home }>
            <CreateSpace className={ styles.createSpace }>
                <div className={ styles.icon }>
                    <img src={ PLUS } />
                </div>
                <div className={ styles.content }>
                    <span>자리 배치 추가</span>
                </div>
            </CreateSpace>
            <Spaces />
        </div>
    );
};

export default Home;