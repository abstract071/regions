import React from 'react'
import { shallow } from 'enzyme'

import SimpleList from './SimpleList'


describe( 'SimpleList', () => {
  let shallowedComponent: any = null

  beforeEach( () => {
    shallowedComponent = shallow(
      <SimpleList
        values={ ['Asia', 'Europe'] }
      />
    )
  } )

  it( 'should match snapshot', () => {
    expect( shallowedComponent ).toMatchSnapshot()
  } )
} )
