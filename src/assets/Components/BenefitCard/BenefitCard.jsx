import React from 'react'
import './BenefitCard.css';
import './BenefitCard.css';


export default function BenefitCard({ title, description, icon }) {
    return (
        <>
            <div className="card">
                <div className="icon-container">
                    <img src={icon} alt="Icon" className="icon" />
                </div>
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                </div>
            </div>
        </>
    )
}
