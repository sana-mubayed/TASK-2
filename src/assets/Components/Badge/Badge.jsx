import './Badge.css'

const Badge = ({ children }) => {
    return (
        <>
            <div className="badgeContainer">
                <div className="badgeSection">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Badge