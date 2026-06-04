import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate = useNavigate()
    return (
        <section className="homepage">
            <div className="homepage-content-container">
                <p className="uppercase font-paragraph text-offblue letter-spacing-medium line-height-medium">So, you want to travel to</p>   
                <h1 className="uppercase font-title text-offwhite letter-spacing-large line-height-medium">Space</h1>
                <p className="font-paragraph text-offblue letter-spacing-medium line-height-medium">
                    Let's face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we'll give you a truly out of this world experience!
                </p>
            </div>
            <div className="explore-button-container">
                <button className="explore-button uppercase font-title text-black" onClick={() => navigate('/destination')}>Explore</button>
            </div>
        </section>

    )
}