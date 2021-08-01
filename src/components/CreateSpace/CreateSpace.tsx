import React, { Fragment, ReactNode } from 'react';
import useModal from '../../hooks/useModal';
import CreateSpaceModal from '../CreateSpaceModal';
import styles from './styles.scss';

interface IProps {
    children : ReactNode;
    className? : string;
};

const CreateSpace = ({ children, className = '' } : IProps) => {
    const { open, openModal, closeModal } = useModal();

    return (
        <Fragment>
            <div className={ `${ styles.create } ${ className }` } onClick={ openModal }>
                { children }
            </div>
            { open && (
                <CreateSpaceModal
                    close={ closeModal }
                />
            ) }
        </Fragment>
    );
};

export default CreateSpace;