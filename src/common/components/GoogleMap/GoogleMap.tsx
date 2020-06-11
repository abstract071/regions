import React from 'react'
import {
  GoogleMap,
  Marker,
  useLoadScript
} from '@react-google-maps/api'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

import classes from './GoogleMap.module.scss'


interface IMapProps {
  latitude: number
  longitude: number
}

const Map: React.FC<IMapProps> = ( {
  latitude,
  longitude
} ) => {
  const {
    isLoaded,
    loadError
  } = useLoadScript( {
    // Sensitive data, should be used on backend or as environment variable
    googleMapsApiKey: 'AIzaSyCEkw4NOJRaKZT_kFcg0LezAmjD_NprPMc'
  } )

  if ( !latitude || !longitude ) {
    return (
      <Typography component="h6" variant="h6">
        There are no coordinates
      </Typography>
    )
  }

  if ( loadError ) {
    return <Box>Map cannot be loaded right now, sorry.</Box>
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName={ classes['map'] }
      center={ {
        lat: latitude,
        lng: longitude
      } }
      zoom={ 3 }
    >
      <Marker
        position={ {
          lat: latitude,
          lng: longitude
        } }
      />
    </GoogleMap>
  ) : (
    <CircularProgress />
  )
}

export default Map
