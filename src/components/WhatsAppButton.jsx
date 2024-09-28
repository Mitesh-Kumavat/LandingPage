import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const whatsappLink = "https://wa.me/+919909182854";

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 left-4 bg-green-500 p-1 rounded-full text-white shadow-lg hover:bg-green-600 mb-16 z-50 transition animate-pop"
            aria-label="Chat with us on WhatsApp"
        >
            <FaWhatsapp size={38} />
        </a>
    );
};

export default WhatsAppButton;
