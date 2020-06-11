import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'


type OrderByType = {
  name: string
  population: number
  capital: string
  region: string
}

type OrderType = 'asc' | 'desc'

type HeadCellType = {
  id: keyof OrderByType
  label: string
  align: 'center' | 'left' | 'right'
  isSortable: boolean
}

const headCells: HeadCellType[] = [
  { id: 'name', align: 'left', label: 'Name', isSortable: true },
  { id: 'region', align: 'left', label: 'Region', isSortable: false },
  { id: 'capital', align: 'left', label: 'Capital', isSortable: false },
  { id: 'population', align: 'left', label: 'Population', isSortable: true }
]

interface ICountryListHeadProps {
  onSort: ( event: React.MouseEvent<unknown>, property: keyof OrderByType ) => void
  order: OrderType
  orderBy: string
}

const CountryListHead: React.FC<ICountryListHeadProps> = ( props: ICountryListHeadProps ) => {
  const {
    order,
    orderBy,
    onSort
  } = props

  const handleSortClick = ( event: React.MouseEvent<unknown>, property: keyof OrderByType ) => {
    onSort( event, property )
  }

  return (
    <TableHead>
      <TableRow>
        {
          headCells.map( ( headCell: HeadCellType ) => (
            <TableCell
              key={ headCell.id }
              align={ headCell.align }
              sortDirection={ orderBy === headCell.id ? order : false }
            >
              {
                headCell.isSortable ? (
                  <TableSortLabel
                    active={ orderBy === headCell.id }
                    direction={ order }
                    onClick={ ( event: React.MouseEvent<unknown> ) => handleSortClick( event, headCell.id ) }
                    IconComponent={ ArrowDropDownIcon }
                  >
                    { headCell.label }
                  </TableSortLabel>
                ) : headCell.label
              }
            </TableCell>
          ) )
        }
      </TableRow>
    </TableHead>
  )
}

export default CountryListHead
