import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ logo, items, btn }) => {
    const [navActive, setNavActive] = useState(items[0]?.content)
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <nav className="navbar">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>
                <ul className="navLinks">
                    {items?.map((item, index) => {
                        const isContact = item?.content === "Contact";
                        return (
                            <li key={index}><a href={item?.link} onClick={() => setNavActive(item?.content)}   className={`${navActive === item?.content ? "active" : ""} ${isContact ? "contactLink" : ""}`}>{item?.content}</a></li>
                        )
                    })}
                </ul>
                {btn && <button>{btn}</button>}
                <button className='showMenuButton' onClick={() => setShowMenu(!showMenu)}><img src="/assets/images/burger.svg" alt="" /></button>
                <ul className={`navMenu ${showMenu && "show"}`}>
                    {items?.map((item, index) => {
                        const isContact = item?.content === "Contact";

                        return (
                            <li key={index}><a href={item?.link} onClick={() => setNavActive(item?.content)} className={`${navActive === item?.content ? "active" : ""} ${isContact ? "contactLink" : ""}`}>{item.content}</a></li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar