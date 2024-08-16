import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { LicenseState, fillMap } from '../utils/utility';
import { Loading } from './Loading';



const USAMapComponent = ({ states }) => {
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        // Assuming a delay for the map to fully render
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the delay as necessary

        return () => clearTimeout(timer);
    }, [states]);


    return (<>

        {isLoading ?
            <div className="flex items-center justify-center h-[675px]">
                <Loading /> {/* Replace with your spinner component */}
            </div>
            :
            <ComposableMap
                className=""
                height={500}
                projection="geoAlbersUsa"
                projectionConfig={{
                    scale: 900,
                }}
            >
                <Geographies geography='/usa.json' onMouseEnter={() => setIsLoading(false)}  >
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={fillMap[states[geo.properties.NAME_1] && states[geo.properties.NAME_1].licensedState]}
                                stroke="#fff"

                                style={{
                                    default: { outline: "none", pointerEvents: "none" },
                                    hover: { outline: "none", pointerEvents: "none" },
                                    pressed: { outline: "none", pointerEvents: "none" }
                                }}
                                title={geo.properties.NAME_1}

                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        }
    </>
    );
};

export default USAMapComponent;
