import React from 'react';
import Space from '../Space';
import styles from './styles.scss';

type Space = {
    id : string;
    name : string;
};

let SPACES : [Space?] = [];

for(let i = 0; i < 30; i++) {
    SPACES.push({
        id : `daejeon_${ i }`,
        name : `대전 신성동 ${ i }층`
    });
}

const Spaces = () => {

    return (
        <div className={ styles.spaces }>
            { SPACES.map(space => (
                <Space
                    key={ space.id }
                />
            )) }
        </div>
    );
};

export default Spaces;