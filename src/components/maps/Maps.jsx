import React from 'react'
import { GoogleMap, useJsApiLoader  } from '@react-google-maps/api'
import './Maps.css'

const containerStyle = {
    width: '100%',
    height: '100%'
}



 function Maps() {
    

    const apiMaps = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiMaps
    })

    return(
        <div className='Mapa'>
            {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={{
                            lat: -9.64900452248988,
                            lng: -35.717256506194815
                        }}
                        zoom={15}

                    >                      
                    </GoogleMap>
                ) : <><p>Error no maps</p></>
            }
        </div>
    )
}

export default Maps
