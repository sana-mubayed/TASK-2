import './BenefitSection.css'
import { HeadingTitle, title, text, BenefitsCardData } from '../Data/BenefitsCardData.jsx'
import ComponentWrapper from '../ComponentWrapper/ComponentWrapper.jsx'
import SectionHeader from '../SectionHeader/SectionHeader.jsx'
import Badge from '../Badge/Badge.jsx'
import BenefitCard from '../BenefitCard/BenefitCard.jsx'

const BenefitSection = () => {
    return (
        <div>
            <ComponentWrapper>
                <Badge>
                    {HeadingTitle}
                </Badge>
                <SectionHeader title={title} text={text} />
                {
                    <div className='benefits-card'>
                        {BenefitsCardData.map((Benefit, index) => (
                            <BenefitCard key={index}
                                icon={Benefit.icon}
                                title={Benefit.title}
                                description={Benefit.description}
                            />
                        ))}
                    </div>
                }
            </ComponentWrapper>
        </div>
    )
}

export default BenefitSection