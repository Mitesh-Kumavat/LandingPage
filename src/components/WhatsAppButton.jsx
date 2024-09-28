import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const whatsappLink = String(import.meta.env.VITE_MOBILE);

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 left-4 bg-green-500 p-2 rounded-full text-white shadow-lg hover:bg-green-600 mb-16 z-50 transition animate-pop"
            aria-label="Chat with us on WhatsApp"
        >
            <FaWhatsapp size={34} />
        </a>
    );
};

export default WhatsAppButton;
