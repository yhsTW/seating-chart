import React from 'react';
import Modal from '../Modal';
import CLOSE from '../../../images/btn-popup-close.svg';
import styles from './styles.scss';

interface IProps {
    close : () => void;
};
// TODO : 이름, 설명, 이미지

const CreateSpaceModal = ({ close } : IProps) => {

    return (
        <Modal>
            <div className={ styles.bg }>
                <div className={ styles.create }>
                    <div className={ styles.header }>
                        <div className={ styles.title }>
                            <span>자리 배치 추가</span>
                        </div>
                        <div className={ styles.close } onClick={ close }>
                            <img src={ CLOSE } />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default CreateSpaceModal;