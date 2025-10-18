import Icon1 from "/assets/images/plus-icon.png";
import Icon2 from "/assets/images/Minuse.png";
import './FaqCard.css'
import { useState } from "react";

const FaqCard = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={`FAQ ${open ? "FaqOpen" : ""}`}>
                <div className={`question ${open ? "questionOpen" : ""}`}>
                    <h3>{question}</h3>
                    <button onClick={() => setOpen(!open)}><img src={open ? Icon2 : Icon1} alt="" /></button>
                </div>
                {open && <div className="answer">
                    <p>{answer}</p>
                </div>}
            </div>
        </>
    )
}

export default FaqCard


