// InfoModal.js
import React from 'react';
import './InfoModal.css';

const InfoModal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-btn">X</button>
                <p className="modal-text">Op deze pagina kun je letters, woorden of zinnen oefenen, maar je moet bepaalde niveaus bereiken om met woorden of zinnen te starten.</p>
            </div>
        </div>
    );
};

export default InfoModal;
