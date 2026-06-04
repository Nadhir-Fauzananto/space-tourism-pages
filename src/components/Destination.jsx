import React from 'react'
import destinationData from './data.json'

const planetImages = {
    'Moon': import.meta.env.BASE_URL + 'destination/image-moon.png',
    'Mars': import.meta.env.BASE_URL + 'destination/image-mars.png',
    'Europa': import.meta.env.BASE_URL + 'destination/image-europa.png',
    'Titan': import.meta.env.BASE_URL + 'destination/image-titan.png'
}

export default function Destination() {
    const [selectedPlanet, setSelectedPlanet] = React.useState(destinationData.destinations[0])
    return (
        <section className="destination">
            <div className="destination-planet-container">
                <h2 className="uppercase font-paragraph text-offwhite letter-spacing-large"><span>01</span> Pick your destination</h2>
                <img className="planet" src={planetImages[selectedPlanet.name]} alt={selectedPlanet.name} />
            </div>
            <div className="destination-info">
                <div className="destination-planet-selection underline-indicators">
                    {destinationData.destinations.map(destination => (
                        <button
                            key={destination.name}
                            onClick={() => setSelectedPlanet(destination)}
                            className={`destination-planet-name uppercase font-paragraph text-offwhite letter-spacing-large ${selectedPlanet.name === destination.name ? 'active' : ''}`}
                        >
                            {destination.name}
                        </button>
                    ))
                    }
                </div>
                <h3 className="uppercase font-destination-planet text-offwhite letter-spacing-large">
                    {selectedPlanet.name}
                </h3>
                <p className="planet-info font-destination-info text-offblue letter-spacing-medium line-height-medium">
                    {selectedPlanet.description}
                </p>
                <hr />
                <div className="destination-statistics-container">
                    <div className="destination-statistics-distance">
                        <p className="destination-statistics-header uppercase font-destination-info text-offblue letter-spacing-large line-height-medium">
                        Avg. distance
                        </p>
                        <p className="destination-statistics uppercase font-statistics text-offwhite letter-spacing-large line-height-medium">
                            {selectedPlanet.distance}
                        </p>
                    </div>
                    <div className="destination-statistics-time">
                        <p className="destination-statistics-header uppercase font-destination-info text-offblue letter-spacing-large line-height-medium">
                            Est. travel time
                        </p>
                        <p className="destination-statistics uppercase font-statistics text-offwhite letter-spacing-large line-height-medium">
                            {selectedPlanet.travel}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}