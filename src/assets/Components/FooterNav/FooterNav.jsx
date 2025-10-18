import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import './FooterNav.css'

const FooterNav = () => {
    const socials = [
        { icon: FaEnvelope, text: "hello@littlelearners.com", link: "#" },
        { icon: FaPhone, text: "+91 91813 23 2309", link: "#" },
        { icon: FaMapMarkerAlt, text: "Somewhere in the World", link: "#" },
    ];

    return (
        <div>
            <div className="FooterNav-container">
                <img src="/assets/images/logo-black.png" alt="" />
                <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
            </div>
            <div className="Social-container">
                {socials.map(({ icon: Icon, text, link }, index) => (
                    <div className="social-content">
                        <a className='social-link' key={index} href={link} target="_blank" rel="noreferrer">
                            <Icon />
                        </a>
                        <span>{text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FooterNav