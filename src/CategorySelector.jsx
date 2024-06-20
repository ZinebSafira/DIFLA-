// CategorySelector.js
import React, { useState } from 'react';
import './CategorySelector.css';
import CategoryCard from './component/CategoryCard';
import letters from './img/letters-img.png';
import words from './img/words.png';
import sentences from './img/sentences.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import InfoModal from './InfoModal';

export default function CategorySelector() {
    const [showModal, setShowModal] = useState(false);

    const handleInfoClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="layout">
                <p>What would you like to learn today?</p>
                <p>Choose your favorite category!</p>
            </div>
            <div className="categories">
                <div className="categoriescard">
                    <CategoryCard image={letters} levelsCompleted={1} completed={true} title="Letters" />
                    <CategoryCard image={words} levelsToUnlock={3} completed={false} title="Words" />
                    <CategoryCard image={sentences} levelsToUnlock={8} completed={false} title="Sentences" />
                </div>
            </div>
            <div className="info-icon">
                <FontAwesomeIcon icon={faInfoCircle} size="4x" color='#095179' onClick={handleInfoClick} />
            </div>
            <InfoModal show={showModal} onClose={handleCloseModal} />
        </>
    );
}
