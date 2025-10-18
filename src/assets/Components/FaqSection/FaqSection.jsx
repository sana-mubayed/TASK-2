import ComponentWrapper from '../ComponentWrapper/ComponentWrapper'
import Badge from '../Badge/Badge'
import { HeadingTitle, title, text, FaqData } from '../Data/FaqData.jsx'
import SectionHeader from '../SectionHeader/SectionHeader.jsx'
import './FaqSection.css'
import FaqCard from '../FaqCard/FaqCard.jsx'


const FaqSection = () => {
    return (
        <ComponentWrapper>
            <Badge>
                {HeadingTitle}
            </Badge>
            <SectionHeader title={title} text={text} />
            <div className="FAQ-Container">
                {FaqData.map(
                    (element, index) => (<FaqCard key={index}  question={element.question} answer={element.answer} />)
                )}
            </div>
        </ComponentWrapper>
    )
}

export default FaqSection
