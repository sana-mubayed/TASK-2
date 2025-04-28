import BenefitCard from '../BenefitCard/BenefitCard.jsx'
import { title, text, BenefitsCardData } from '../Data/BenefitsCardData.jsx'
import React from 'react'
import './BenefitSection.css'
import SectionHeader from '../SectionHeader/SectionHeader.jsx'

export default function () {
    return (
        <>
            <section className='' >
                <SectionHeader title={title} text={text} />
                {
                    <div className='benefits-card'>
                        {BenefitsCardData.map((Benefit, index) => (
                            <div
                                key={index}
                                className={`row`}>
                                <BenefitCard
                                    imageSrc={Benefit.image}
                                    title={Benefit.title}
                                    text={Benefit.text}
                                />
                            </div>
                        ))}
                    </div>
                }
            </section>

        </>
    )
}
