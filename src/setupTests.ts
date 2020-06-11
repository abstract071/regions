import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import * as redux from 'react-redux'


configure( { adapter: new Adapter() } )

jest.mock( 'react-router-dom', () => ( {
  ...jest.requireActual( 'react-router-dom' ),
  useLocation: () => ( {
    pathname: '',
    state: {}
  } )
} ) )

const spyUseSelector = jest.spyOn( redux, 'useSelector' )
spyUseSelector.mockReturnValue( {
  regions: {},
  countries: {},
  country: {
    callingCodes: [],
    languages: [],
    currencies: [],
    timezones: [],
    latlng: [0, 0]
  }
} )
const spyUseDispatch = jest.spyOn( redux, 'useDispatch' )
spyUseDispatch.mockReturnValue( jest.fn() )
