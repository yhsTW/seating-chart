import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children : ReactNode;
};

const Portal = ({ children } : PortalProps) => {
    const elRef = useRef(null);

    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    const el = elRef.current;
    const modal = document.getElementById('modal-root');

    useEffect(() => {
        modal.appendChild(el);

        return () => modal.removeChild(el);
    }, []);

    return createPortal(children, el);
};

interface ModalProps  {
    children : ReactNode;
};

const Modal = ({ children } : ModalProps) => (
    <Portal>
        { children }
    </Portal>
);

export default Modal;