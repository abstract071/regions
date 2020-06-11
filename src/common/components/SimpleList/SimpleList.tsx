import React from 'react'
import {
  Link
} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PublicRoundedIcon from '@material-ui/icons/PublicRounded'


interface ISimpleList {
  values: string[]
}

const SimpleList: React.FC<ISimpleList> = ( {
  values
} ) => {
  return (
    <Container>
      <List component="nav">
        {
          values.map( ( value, idx ) => (
            <ListItem
              key={ `region_${idx}` }
              button
              component={ Link }
              to={ {
                pathname: '/region',
                state: { region: value }
              } }
            >
              <ListItemIcon>
                <PublicRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={ value } />
            </ListItem>
          ) )
        }
      </List>
    </Container>
  )
}

export default SimpleList
