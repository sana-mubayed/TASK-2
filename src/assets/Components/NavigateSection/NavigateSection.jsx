import './NavigateSection.css'
import { HeadingTitle, title, text, NavigateCardData } from '../Data/NavigateCardData.jsx'
import Badge from '../Badge/Badge.jsx'
import ComponentWrapper from '../ComponentWrapper/ComponentWrapper.jsx'
import SectionHeader from '../SectionHeader/SectionHeader.jsx'
import NavigateCard from '../NavigateCard/NavigateCard.jsx'

const NavigateSection = () => {
    return (
        <ComponentWrapper>
            <Badge>{HeadingTitle}</Badge >
            <SectionHeader title={title} text={text} />
            {
                <div className="navigate-container">
                    {NavigateCardData.map((element, index) => (
                        <NavigateCard key={index} title={element.title} description={element.description} />
                    ))}
                </div>

            }
        </ComponentWrapper>
    )
}

export default NavigateSection