import './ComponentWrapper.css'

const ComponentWrapper = ({ children  }) => {
    return (
        <>
            <section className='container-wrapper'>
                {children}
            </section>
        </>
    )
}

export default ComponentWrapper