import React from "react";
import './CategorySelector.css';
import letters from "./img/letters-img.png"
import words from "./img/words.png"
import sentences from "./img/sentences.png"
import lock from "./img/lock.png"
import stars from "./img/stars.png"
export default function CategorySelector() {
    return (
        <>
            <div className="layout">
                <p>what would you like to learn today?</p>
                <p>Choose your favorite category!</p>
            </div>
            <div className="categories">
                <div className="categoriescard">
                    <div className="card">
                        <img src={letters}></img>
                        <div className="container-row">

                            <div className="container">
                                <p>levels completed</p>
                                <p>1/20</p>

                            </div>
                            <img src={stars}></img>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container">
                            <img src={words} alt="words"></img>
                            <img src={lock} alt="lock" className="lock"></img>
                        </div>
                        <div className="container">
                            <p>Finish 3 more levels to unlock “Words”</p>

                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container">
                            <img src={sentences} alt="words"></img>
                            <img src={lock} alt="lock" className="lock"></img>
                        </div>
                        <div className="container">
                            <p>Finish 8 more levels to unlock “sentences”</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
