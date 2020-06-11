import React from 'react'
import { shallow } from 'enzyme'

import Countries from './Countries'


describe( 'Countries', () => {
  let shallowedComponent: any = null

  beforeEach( () => {
    shallowedComponent = shallow(
      <Countries />
    )
  } )

  it( 'should match snapshot', () => {
    expect( shallowedComponent ).toMatchSnapshot()
  } )
} )
