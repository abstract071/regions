import React from 'react'
import { shallow } from 'enzyme'

import CountryList from './CountryList'


describe( 'CountryList', () => {
  let shallowedComponent: any = null

  beforeEach( () => {
    shallowedComponent = shallow(
      <CountryList
        countries={ [
          { name: 'Ukraine' },
          { name: 'New Zealand' }
        ] }
      />
    )
  } )

  it( 'should match snapshot', () => {
    expect( shallowedComponent ).toMatchSnapshot()
  } )
} )
