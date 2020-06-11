import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'


describe( 'Header', () => {
  let shallowedComponent: any = null

  beforeEach( () => {
    shallowedComponent = shallow(
      <Header />
    )
  } )

  it( 'should match snapshot', () => {
    expect( shallowedComponent ).toMatchSnapshot()
  } )
} )
