import React, { useEffect, useState } from 'react'
import ArrowRight from '../../images/Vector2.png'
import GroupCircle from '../../images/Abstract Design.png'
import GroupCircleAlt from '../../images/Abstract Design 2.png';
import './NotificationBar.css';
export default function NotificationBar() {
    const [circleImage, setCircleImage] = useState(GroupCircle);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 1440) {
                setCircleImage(GroupCircleAlt); 
            } else {
                setCircleImage(GroupCircle);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        < >
            <div className="notification-bar">
                <img src={circleImage} alt="Left Decoration" className="circle-image flipped" />
                <div className="notification-center">
                    <h5 className="notification-text">
                        Admission is Open, Grab your seat now
                    </h5>
                    <img src={ArrowRight} alt="Arrow Right" className="arrow-icon" />
                </div>
                <img src={circleImage} alt="Right Decoration" className="circle-image" />
            </div>
        </>
    )
}