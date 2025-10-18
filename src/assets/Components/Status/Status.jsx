import './status.css'

const Status = ({ number, text }) => {
    return (
        <>
            <div className="status">
                <span className='status-number'>{number}</span>
                <span className='status-text'>{text}</span>
            </div>
        </>
    )
}

export default Status