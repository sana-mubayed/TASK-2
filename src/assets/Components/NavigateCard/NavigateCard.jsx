import './NavigateCard.css'

const NavigateCard = ({ title, description }) => {
    return (
        <div className='navigate-card'>
            <div className="navigate-content">
                <h5>{title}</h5>
                <img src="/assets/images/Container.png" alt="" />
                <p>{description}</p>
            </div>
            <button>Learn More <img src="/assets/images/Vector2.png" alt="" /></button>

        </div>
    )
}

export default NavigateCard