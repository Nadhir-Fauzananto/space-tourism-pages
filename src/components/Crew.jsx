import React from 'react'
import crewData from './data.json'

const crewImages = {
    'Douglas Hurley': import.meta.env.BASE_URL + 'crew/image-douglas-hurley.png',
    'Mark Shuttleworth': import.meta.env.BASE_URL + 'crew/image-mark-shuttleworth.png',
    'Victor Glover': import.meta.env.BASE_URL + 'crew/image-victor-glover.png',
    'Anousheh Ansari': import.meta.env.BASE_URL + 'crew/image-anousheh-ansari.png'
}

export default function Crew() {
    const [selectedCrew, setSelectedCrew] = React.useState(crewData.crew[0])
    return (
        <section className="crew">
            <div className="crew-info">
                <h2 className="uppercase font-paragraph text-offwhite letter-spacing-large"><span>02</span> Meet your crew</h2>
                <div className="crew-info-container">
                    <h3 className="crew-title uppercase font-title text-offblue letter-spacing-large">{selectedCrew.role}</h3>
                    <h4 className="crew-name uppercase font-title text-offwhite letter-spacing-large">{selectedCrew.name}</h4>
                    <p className="crew-description font-paragraph text-offblue letter-spacing-medium line-height-large">{selectedCrew.bio}</p>
                </div>
            </div>
            <div className="dot-indicators"> 
                {crewData.crew.map(crew => (
                    <button
                        key={crew.name}
                        className={`dot-button ${selectedCrew.name === crew.name ? 'active' : ''}`}
                        onClick={() => setSelectedCrew(crew)}
                    ><span className="sr-only">{crew.name}</span></button>
                ))}
            </div>
            <img className="crew-image" src={crewImages[selectedCrew.name]} alt={selectedCrew.name} />
        </section>
    )
}