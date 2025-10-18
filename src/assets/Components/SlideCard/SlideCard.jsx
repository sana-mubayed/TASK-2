import './SlideCard.css'

const SlideCard = ({ image, Name, text }) => {
    return (
        <>
            <div className="slider-card">
                <div className="profile">
                    <div className="img-container">
                        <img src={image} alt="" />
                    </div>
                    <h3>{Name}</h3>
                </div>
                <img src="./assets/images/Stars-Container.png" alt="" />
                <p>{text}</p>
            </div>
        </>
    )
}

export default SlideCard