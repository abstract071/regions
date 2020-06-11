import React from 'react'
import { shallow } from 'enzyme'

import CountryListHead from './CountryListHead'


describe( 'CountryListHead', () => {
  let shallowedComponent: any = null
  let onSortMockFn = jest.fn()

  beforeEach( () => {
    shallowedComponent = shallow(
      <CountryListHead
        order="asc"
        orderBy="name"
        onSort={ onSortMockFn }
      />
    )
  } )

  it( 'should match snapshot', () => {
    expect( shallowedComponent ).toMatchSnapshot()
  } )
} )
