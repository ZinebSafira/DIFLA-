// CategoryCard.js
import React from 'react';
import lock from '../img/lock.png';
import stars from '../img/stars.png';
import './CategoryCard.css';

export default function CategoryCard({ image, levelsCompleted, levelsToUnlock, title, completed }) {
    return (
        <div className="card">
            <div className="image-container">
                <img src={image} alt={title} />
                {levelsToUnlock > 0 && !completed && <img src={lock} alt="lock" className="lock" />}
            </div>
            <div className="container">
                {completed ? (
                    <div className="container-row">
                        <div className="container">
                            <p>levels completed</p>
                            <p>{levelsCompleted}/20</p>
                        </div>
                        <img src={stars} alt="stars" />
                    </div>
                ) : (
                    <p>Finish {levelsToUnlock} more levels to unlock "{title}"</p>
                )}
            </div>
        </div>
    );
}
