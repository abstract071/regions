import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import Regions from './components/Regions'
import Countries from './components/Countries'
import Country from './components/Country'


const Home: React.FC = () => {
  return (
    <Grid
      className="container"
      container
      spacing={ 2 }
      justify="center"
    >
      <Switch>
        <Route exact path="/">
          <Regions />
        </Route>
        <Route path="/region">
          <Countries />
        </Route>
        <Route path="/country">
          <Country />
        </Route>
      </Switch>
    </Grid>
  )
}

export default Home
