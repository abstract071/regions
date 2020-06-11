import React from 'react'
import { shallow } from 'enzyme'

import Home from './index'


describe( 'Home', () => {
  let shallowedComponent: any = null

  beforeEach( () => {
    shallowedComponent = shallow(
      <Home />
    )
  } )

  it( 'should match snapshot', () => {
    expect( shallowedComponent ).toMatchSnapshot()
  } )
} )
