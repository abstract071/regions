import React from 'react'
import { shallow } from 'enzyme'

import CountryListToolbar from './CountryListToolbar'


describe( 'CountryListToolbar', () => {
  let shallowedComponent: any = null

  beforeEach( () => {
    shallowedComponent = shallow(
      <CountryListToolbar />
    )
  } )

  it( 'should match snapshot', () => {
    expect( shallowedComponent ).toMatchSnapshot()
  } )
} )
