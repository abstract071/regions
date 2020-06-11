import React from 'react'
import {
  useHistory
} from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import CountryListHead from './CountryListHead'
import CountryListToolbar from './CountryListToolbar'

import {
  stableSort,
  getComparator,
  OrderType
} from '../../../utils/helpers'


interface ICountryListProps {
  countries: any[]
}

type OrderByType = {
  name: string
  population: number
  capital: string
  region: string
}

const CountryList: React.FC<ICountryListProps> = ( {
  countries
} ) => {
  const [order, setOrder] = React.useState<OrderType>( 'desc' )
  const [orderBy, setOrderBy] = React.useState<keyof OrderByType>( 'name' )
  const history = useHistory()

  const handleSort = ( event: React.MouseEvent<unknown>, property: keyof OrderByType ) => {
    const isAsc = orderBy === property && order === 'asc'
    const newOrder = isAsc ? 'desc' : 'asc'
    setOrder( newOrder )
    setOrderBy( property )
  }

  const handleRowClick = ( name: string ) => {
    history.push( '/country', { name } )
  }

  return (
    <Grid>
      <Paper className="paper">
        <CountryListToolbar />
        {
          countries.length ? (
            <Box className="table-box">
              <Table>
                <CountryListHead
                  order={ order }
                  orderBy={ orderBy }
                  onSort={ handleSort }
                />
                <TableBody>
                  {
                    stableSort( countries, getComparator( order, orderBy ) )
                      .map( ( row: any ) => {
                        return (
                          <TableRow
                            hover
                            tabIndex={ -1 }
                            key={ row.name }
                            onClick={ () => handleRowClick( row.name ) }
                          >
                            <TableCell align="left">
                              <Typography>{ row.name } </Typography>
                            </TableCell>
                            <TableCell align="left">
                              <Typography>{ row.region }</Typography>
                            </TableCell>
                            <TableCell align="left">
                              <Typography>{ row.capital }</Typography>
                            </TableCell>
                            <TableCell align="left">
                              <Typography>{ row.population }</Typography>
                            </TableCell>
                          </TableRow>
                        )
                      } )
                  }
                </TableBody>
              </Table>
            </Box>
          ) : (
            <Typography variant="h5" align="center" style={ { marginBottom: 30 } }>There is no data</Typography>
          )
        }
        <Button
          variant="outlined"
          color="primary"
          onClick={ () => history.goBack() }
        >
          Back
        </Button>
      </Paper>
    </Grid>
  )
}

export default CountryList

