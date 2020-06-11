import React, {
  useEffect
} from 'react'
import {
  useSelector,
  useDispatch
} from 'react-redux'
import {
  useLocation,
  Redirect
} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

import CountryList from './CountryList'

import {
  countriesSelector
} from '../../../selectors'

import {
  getCountriesByRegion,
  resetCountriesByRegion
} from '../../../actions'


const Countries: React.FC = () => {
  const { state } = useLocation<any>()
  const {
    // error,
    isLoading,
    data: countries
  } = useSelector( countriesSelector )
  const dispatch = useDispatch()

  useEffect( () => {
    if ( state && state.region ) {
      dispatch( getCountriesByRegion( { region: state.region } ) )
    }

    return () => {
      dispatch( resetCountriesByRegion() )
    }
  }, [] )

  if ( !state ) {
    return <Redirect to="/" />
  }

  return (
    <Grid className="hrz-center" item xs md={ 10 }>
      {
        !isLoading ? (
          <CountryList
            countries={ countries }
          />
        ) : <CircularProgress />
      }
    </Grid>
  )
}

export default Countries
