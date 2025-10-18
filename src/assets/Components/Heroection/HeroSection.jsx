import ComponentWrapper from '../ComponentWrapper/ComponentWrapper'
import Status from '../Status/Status'
import './HeroSection.css'


export default function HeroSection() {
    const statuses = [
        { number: "+7000", text: "Students Passed Out" },
        { number: "+37", text: "Awards & Recognitions" },
        { number: "+15", text: "Experience Educators" }
    ];
    return (

        <ComponentWrapper>
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-image-wrapper">
                        <img className="hero-image" src="/assets/images/Image Container.png" alt="Happy kids" />
                    </div>
                    <div className="hero-content">
                        <p className="hero-subtitle">Welcome to Little Learners Academy</p>
                        <h1>
                            Where Young Minds <br /> Blossom and <span className='orange'>Dreams <br /> Take Flight.</span>
                        </h1>
                        <p className="hero-description">
                            Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!
                        </p>
                        <div className="hero-status">
                            {statuses.map((element, index) => <Status key={index} number={element.number} text={element.text} />)}
                        </div>
                    </div>
                </div>
            </section>
        </ComponentWrapper>
    )
}
