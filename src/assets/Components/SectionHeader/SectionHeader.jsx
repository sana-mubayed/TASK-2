import React from 'react'
import './SectionHeader.css'


export default function SectionHeader({ title, text }) {
    return (
        <>
            <section className="section-header">
                <h2>{title}</h2>
                <p>{text}</p>
            </section>
        </>
    )
}
