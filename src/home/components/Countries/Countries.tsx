import React, {
  useEffect
} from 'react'
import {
  useSelector,
  useDispatch
} from 'react-redux'
import {
  useLocation
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
  const { state } = useLocation()
  const {
    // error,
    isLoading,
    data: countries
  } = useSelector( countriesSelector )
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( getCountriesByRegion( { region: state.region } ) )

    return () => {
      dispatch( resetCountriesByRegion() )
    }
  }, [] )

  return (
    <Grid className="hrz-center" item>
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
