import React from 'react'
import { useHistory } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


const CountryListToolbar: React.FC = () => {
  const history = useHistory()

  return (
    <Toolbar className="toolbar">
      <Typography variant="h4" id="tableTitle">
        Region's countries
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={ () => history.goBack() }
      >
        Back
      </Button>
    </Toolbar>
  )
}

export default CountryListToolbar
