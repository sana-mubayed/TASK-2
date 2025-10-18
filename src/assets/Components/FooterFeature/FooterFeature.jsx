import './FooterFeature.css'

const FooterFeature = ({ menuData }) => {


    return (
        menuData.map((element, index) => (
            <div className='container-feature' key={index}>  
                <h2>{element.title}</h2>
                <ul>
                    {element.items.map((ele, i) => (
                        <li key={i}>{ele}</li>
                    ))}
                </ul>
            </div>
        ))

    )
}

export default FooterFeature