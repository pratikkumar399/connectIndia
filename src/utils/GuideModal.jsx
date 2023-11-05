import { useState } from 'react';
import { Button, Modal } from 'antd';
const GuideModal = ({ title, rating }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="text" onClick={showModal}>
                Book Guide
            </Button>
            <Modal className='text-black' title="Book Guide" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>{title}</p>
                <p>{rating}</p>
                <p>Price: $10</p>
            </Modal>
        </>
    );
};
export default GuideModal;