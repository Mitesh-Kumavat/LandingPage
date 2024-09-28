import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const CallButton = () => {
    const phoneNumber = String(import.meta.env.VITE_TEL); // Replace with your phone number

    return (
        <a
            href={phoneNumber}
            className="fixed bottom-4 right-4 z-50 bg-blue-500 p-3 rounded-full text-white shadow-lg mb-16  hover:bg-blue-600 transition animate-pop"
            aria-label="Call us"
        >
            <FaPhoneAlt size={23} />
        </a>
    );
};

export default CallButton;