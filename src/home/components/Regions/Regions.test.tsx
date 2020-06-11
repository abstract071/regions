import React from 'react'
import { shallow } from 'enzyme'

import Regions from './Regions'


describe( 'Regions', () => {
  let shallowedComponent: any = null

  beforeEach( () => {
    shallowedComponent = shallow(
      <Regions />
    )
  } )

  it( 'should match snapshot', () => {
    expect( shallowedComponent ).toMatchSnapshot()
  } )
} )
