import './NotificationBar.css';
export default function NotificationBar() {
    return (
        <>
            <div className="notification-bar">
                <div className="notification-container">
                    <img className='left-design' src="/assets/images/desktop-left.png" alt="" />
                    <img className='big-ball' src="/assets/images/desktop-b-ball.png" alt="" />
                    <div className="notification-text">
                        <h5>
                            Admission is Open, Grab your seat now
                            <img src="/assets/images/Vector2.png" alt="Arrow Right" />
                        </h5>
                    </div>
                    <img className='small-ball' src="/assets/images/desktop-s-ball.png" alt="" />
                    <img className='right-design' src="/assets/images/desktop-right.png" alt="" />
                </div>
            </div>
        </>
    )
}