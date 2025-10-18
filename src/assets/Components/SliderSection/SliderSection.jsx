import './SliderSection.css'
import { HeadingTitle, title, text, TestimonialsData } from '../Data/TestimonialsData.jsx'
import SectionHeader from '../SectionHeader/SectionHeader.jsx'
import Badge from '../Badge/Badge.jsx'
import ComponentWrapper from '../ComponentWrapper/ComponentWrapper.jsx'
import SlideCard from '../SlideCard/SlideCard.jsx'
import { useState } from 'react'

const SliderSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxVisibleCards = window.innerWidth >= 1440 ? 3 : 1;
    // هي عبارة عن رقم المجموعة يلي لتنعرض مو رقم الكرت المعروض current index 
    // المجموعة كلا 100 لهيك حطينا translate100
    // الكرت هو 100 تقسيم الكروت المعروضة لهيك حطينا (currentIndex * (100 / maxVisibleCards))
    const nextSlide = () => {
        console.log("➡️ NEXT clicked");
        console.log("قبل التغيير currentIndex =", currentIndex);
        if (currentIndex + maxVisibleCards < TestimonialsData.length) {
            console.log("دخل على next if");
            console.log("before if next currentIndex =", currentIndex);
            setCurrentIndex(currentIndex + 1);
            console.log("after if next currentIndex =", currentIndex);
        }
        else {
            console.log("دخل على else next");
            console.log("before else next currentIndex =", currentIndex);
            setCurrentIndex(0);
            console.log("after else next currentIndex =", currentIndex);

        }
    }

    const prevSlide = () => {
        console.log("⬅️ PREV clicked");
        console.log("قبل التغيير currentIndex =", currentIndex);
        if (currentIndex > 0) {
            console.log("دخل على if prev");
            console.log("before if PREV currentIndex =", currentIndex);
            setCurrentIndex(currentIndex - 1);
            console.log("after if PREV currentIndex =", currentIndex);
        } else {
            console.log("دخل على else prev");
            console.log("before else prev currentIndex =", currentIndex);
            setCurrentIndex(TestimonialsData.length - maxVisibleCards);
            console.log("after else PREV currentIndex =", currentIndex);

        }
    };


    return (
        <ComponentWrapper>
            <Badge>
                {HeadingTitle}
            </Badge>
            <SectionHeader title={title} text={text} />
            <section className="slider-wrapper">
                <button className='btn prev' onClick={prevSlide} ><img src="/assets/images/right.svg" alt="" /></button>
                {
                    <div className="slider-container">
                        <div className="slider" style={{ transform: `translateX(-${(currentIndex * 100)}%)` }}>
                            {TestimonialsData.map((sli, index) => (
                                <SlideCard key={index} image={sli.image} Name={sli.Name} text={sli.text} />
                            ))}
                        </div>
                    </div>
                }
                <button className='btn next' onClick={nextSlide} ><img src="/assets/images/left.svg" alt="" /></button>
                <div className="slider-buttons-mobile">
                    <button className='nav-button prev-button' onClick={prevSlide}><img src="/assets/images/right.svg" alt="" /></button>
                    <button className='nav-button next-button' onClick={nextSlide}><img src="/assets/images/left.svg" alt="" /></button>
                </div>
            </section>
        </ComponentWrapper>
    )
}

export default SliderSection