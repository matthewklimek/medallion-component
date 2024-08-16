import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { LicenseState, fillMap } from '../utils/utility';



const USAMapComponent = ({ states }) => {
    return (
        <ComposableMap
            className=""
            height={500}

            projection="geoAlbersUsa"
            projectionConfig={{
                scale: 900,
            }}
        >
            <Geographies geography='/usa.json'>
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
    );
};

export default USAMapComponent;
