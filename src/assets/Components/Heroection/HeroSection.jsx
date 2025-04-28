import React from 'react'
import Navbar from '../Navbar/Navbar'
import kidsimage from '../../images/Image Container.png'

import './HeroSection.css'

import NotificationBar from '../NotificationBar/NotificationBar'

export default function HeroSection() {
    return (
        <>
            < NotificationBar />
            < Navbar />
            <section className="hero">
                <div className="hero__container">
                    <div className="hero__image">
                        < img src={kidsimage} alt="Happy kids" />
                        <div className="hero__decorations">
                        </div>
                    </div>
                    <div className="hero__content">
                        <p className="hero__welcome">Welcome to Little Learners Academy</p>
                        <h1 className="hero__title">
                            Where Young Minds Blossom <br />
                            and <span>Dreams Take Flight.</span>
                        </h1>
                        <p className="hero__description">
                            Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!
                        </p>
                        <div className="hero__stats">
                            <div className="hero__stat">
                                <h2>+7000</h2>
                                <p>Students Passed Out</p>
                            </div>
                            <div className="hero__stat">
                                <h2>+37</h2>
                                <p>Awards & Recognitions</p>
                            </div>
                            <div className="hero__stat">
                                <h2>+15</h2>
                                <p>Experienced Educators</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
