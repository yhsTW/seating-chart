import { useState } from 'react';

const useModal = (init : Boolean = false) => {
    const [open, setOpen] = useState(init);

    const openModal = () => setOpen(true);

    const closeModal = () => setOpen(false);

    return {
        open,
        openModal,
        closeModal
    };
};

export default useModal;