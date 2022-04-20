import React from 'react'
import { GoogleMap, useJsApiLoader  } from '@react-google-maps/api'

export default function Maps() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC5zZvUjtXLUPe7CA0JTnW32iZSoBrxo1s"
      })

      //const [map, setMap] = useState(null)

    return(
        <div className='Mapa'>
                {isLoaded ? (
        <GoogleMap
            mapContainerStyle={{maxWidth: '100px0', maxHeight: '100px'}}
            center={{
                lat: -9.651072, 
                lng: -35.719004

            }}
            zoom={15}
        
            ></GoogleMap>
            ) : <></>}
        </div>
    )
};
