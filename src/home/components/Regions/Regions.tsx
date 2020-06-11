import React, {
  useEffect
} from 'react'
import {
  useSelector,
  useDispatch
} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

import SimpleList from '../../../common/components/SimpleList'

import {
  regionsSelector
} from '../../../selectors'

import {
  getRegions
} from '../../../actions'


const Regions: React.FC = () => {
  const {
    // error,
    isLoading,
    data: regions
  } = useSelector( regionsSelector )
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( getRegions() )
  }, [] )

  return (
    <Grid className="hrz-center" item xs sm={ 10 } md={ 6 }>
      {
        !isLoading ? (
          <SimpleList
            values={ regions }
          />
        ) : <CircularProgress />
      }
    </Grid>
  )
}

export default Regions
