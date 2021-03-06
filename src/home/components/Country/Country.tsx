import React, {
  useEffect
} from 'react'
import {
  useSelector,
  useDispatch
} from 'react-redux'
import {
  useHistory,
  useLocation,
  Redirect
} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CircularProgress from '@material-ui/core/CircularProgress'

import GoogleMap from '../../../common/components/GoogleMap/GoogleMap'

import {
  countrySelector
} from '../../../selectors'

import {
  getCountryByName,
  resetCountryByName
} from '../../../actions'

import classes from './Country.module.scss'


const Country: React.FC = () => {
  const { state } = useLocation<any>()
  const {
    // error,
    isLoading,
    country
  } = useSelector( countrySelector )
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect( () => {
    if ( state && state.name ) {
      dispatch( getCountryByName( { name: state.name } ) )
    }

    return () => {
      dispatch( resetCountryByName() )
    }
  }, [] )

  if ( !state ) {
    return <Redirect to="/" />
  }

  return (
    <Grid className="hrz-center" item xs sm={ 10 } md={ 6 }>
      {
        !isLoading ? (
          <Paper className="paper">
            <Typography variant="h4" color="primary" gutterBottom>
              { country.name }
            </Typography>
            <Card className={ classes['card'] }>
              <CardHeader title="Flag" />
              <CardMedia
                className={ classes['card-media'] }
                image={ country.flag }
                title={ country.name }
              />
            </Card>
            <Typography variant="body1" gutterBottom>
              <b>Capital:</b> { country.capital }
            </Typography>
            <Typography variant="body1" gutterBottom>
              <b>Population:</b> { country.population }
            </Typography>
            <Typography variant="body1" gutterBottom>
              <b>Region:</b> { country.region }
            </Typography>
            <Typography variant="body1" gutterBottom>
              <b>Sub region:</b> { country.subregion }
            </Typography>
            <Typography variant="body1" gutterBottom>
              <b>Phone codes:</b> { country.callingCodes.join( ', ' ) }
            </Typography>
            <Typography variant="body1" gutterBottom>
              <b>Time zones:</b>
            </Typography>
            <List>
              {
                country.timezones.map( ( tz: string, idx: number ) => (
                  <ListItem key={ `${country.name}_timezone_${idx}` }>
                    <ListItemText primary={ tz } />
                  </ListItem>
                ) )
              }
            </List>
            <Typography variant="body1" gutterBottom>
              <b>Languages:</b>
            </Typography>
            <List>
              {
                country.languages.map( ( language: { name: string }, idx: number ) => (
                  <ListItem key={ `${country.name}_language_${idx}` }>
                    <ListItemText primary={ language.name } />
                  </ListItem>
                ) )
              }
            </List>
            <Typography variant="body1" gutterBottom>
              <b>Currencies:</b>
            </Typography>
            <List>
              {
                country.currencies.map( ( currency: { name: string, symbol: string }, idx: number ) => (
                  <ListItem key={ `${country.name}_currency_${idx}` }>
                    <ListItemText
                      primary={ `${currency.symbol} ( ${currency.name} )` }
                    />
                  </ListItem>
                ) )
              }
            </List>
            <Divider />
            <Box className="txt-center p-8">
              <GoogleMap
                latitude={ country.latlng[0] }
                longitude={ country.latlng[1] }
              />
            </Box>
            <Button
              variant="outlined"
              color="primary"
              onClick={ () => history.goBack() }
            >
              Back
            </Button>
          </Paper>
        ) : <CircularProgress />
      }
    </Grid>
  )
}

export default Country
