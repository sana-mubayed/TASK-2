import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import FooterFeature from '../FooterFeature/FooterFeature'
import FooterNav from '../FooterNav/FooterNav'
import './Footer.css'

const Footer = () => {
    const menuData = [
        {
            title: "Home",
            items: ["Features", "Our Testimonials", "FAQ"]
        },
        {
            title: "About Us",
            items: ["Our Mission", "Our Vission", "Awards and Recognitions", "History", "Teachers"]
        },
        {
            title: "Academics",
            items: ["Special Features", "Gallery"]
        },
        {
            title: "Contact Us",
            items: ["Information", "Map & Direction"]
        }
    ];

    const socialMedia = [
        {
            icon: FaFacebook,
        },
        {
            icon: FaTwitter,
        },
        {
            icon: FaLinkedin,
        },

    ];

    return (
        <>
            <div className="footer-container">
                <div className="Footer">
                    <FooterNav />
                    <div className="rightfooter">
                        <FooterFeature menuData={menuData} />
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-policies">
                        <a href="#">Terms of Service</a>
                        <span>|</span>
                        <a href="#">Privacy Policy</a>
                        <span>|</span>
                        <a href="#">Cookie Policy</a>
                    </div>
                    <div className="social-container">
                        {
                            socialMedia.map((element, index) => (
                                <a key={index} href="#">
                                    <element.icon />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <p className="footer-copyright">
                    Copyright © [2023] Little Learners Academy. All rights reserved.
                </p>
            </div>

        </>
    )
}

export default Footer