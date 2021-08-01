import React from 'react';
import { Link } from 'react-router-dom';
import MORE from '../../../images/btn-more.svg';
import MORE_ON from '../../../images/btn-more-on.svg';
import styles from './styles.scss';

const Space = () => {

    return (
        <Link className={ styles.space } to={ '' }>
            <div className={ styles.top }>
                <div className={ styles.icon }>
                    <img className={ styles.default } src={ MORE } />
                    <img className={ styles.on } src={ MORE_ON } />
                </div>
            </div>
            <div className={ styles.contents }>
                <div className={ styles.title }>
                    <span>제목</span>
                </div>
                <div className={ styles.description }>
                    <span>가나다라마바사아자차카타파하</span>
                </div>
                {/*TODO: 마지막 수정일, 마지막 수정한 사람 */}
                <div className={ styles.lastEdited }>
                    <span>2021.07.24에 수정됨</span>
                </div>
            </div>
        </Link>
    );
};

export default Space;