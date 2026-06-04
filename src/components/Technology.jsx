import React from 'react';
import technologyData from './data.json'

const technologyImages = {
    'Launch vehicle': import.meta.env.BASE_URL + 'technology/image-launch-vehicle-portrait.jpg',
    'Spaceport': import.meta.env.BASE_URL + 'technology/image-spaceport-portrait.jpg',
    'Space capsule': import.meta.env.BASE_URL + 'technology/image-space-capsule-portrait.jpg'
}

export default function Technology() {
    const [selectedTechnology, setSelectedTechnology] = React.useState(technologyData.technology[0])
    return (
        <section className="technology">
            <h2 className="uppercase font-paragraph text-offwhite letter-spacing-large"><span>03</span> Space Launch 101</h2>
            <img className="technology-image" src={technologyImages[selectedTechnology.name]} alt={selectedTechnology.name} />
            <div className="technology-content">
                <div className="technology-info-selection numbered-indicators">
                    {technologyData.technology.map(tech => (
                        <button
                            key={tech.name}
                            className={`numbered-button ${selectedTechnology.name === tech.name ? 'active' : ''}`}
                            onClick={() => setSelectedTechnology(tech)}
                        >
                            {technologyData.technology.indexOf(tech) + 1}
                        </button>
                    ))}
                </div>
                <div className="technology-info">
                    <h3 className="uppercase font-title text-offwhite letter-spacing-large">the terminology</h3>
                    <h4 className="technology-info-name uppercase font-technology-name text-offwhite letter-spacing-large">{selectedTechnology.name}</h4>
                    <p className="technology-info-description font-technology-description text-offblue letter-spacing-medium line-height-medium">{selectedTechnology.description}</p>
                </div>
            </div>
        </section>
    )
}