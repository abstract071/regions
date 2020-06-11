import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const CountryListToolbar: React.FC = () => {
  return (
    <Toolbar>
      <Typography variant="h4" id="tableTitle">
        Region's countries
      </Typography>
    </Toolbar>
  )
}

export default CountryListToolbar
