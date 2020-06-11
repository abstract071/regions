import React from 'react'
import { shallow } from 'enzyme'

import GoogleMap from './GoogleMap'


describe( 'GoogleMap', () => {
  let shallowedComponent: any = null

  beforeEach( () => {
    shallowedComponent = shallow(
      <GoogleMap
        latitude={ 0 }
        longitude={ 0 }
      />
    )
  } )

  it( 'should match snapshot', () => {
    expect( shallowedComponent ).toMatchSnapshot()
  } )
} )
