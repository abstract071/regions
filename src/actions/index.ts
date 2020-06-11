import * as types from '../constants'


export const getRegions = () => ( { type: types.GET_REGIONS_TRIGGER } )

export const resetRegions = () => ( { type: types.RESET_REGIONS } )

interface IGetCountriesByRegionPayload {
  region: string
}

export const getCountriesByRegion = ( payload: IGetCountriesByRegionPayload ) => ( {
  type: types.GET_COUNTRIES_BY_REGION_TRIGGER,
  payload
} )

export const resetCountriesByRegion = () => ( { type: types.RESET_COUNTRIES_BY_REGION } )

interface IGetCountryByNamePayload {
  name: string
}

export const getCountryByName = ( payload: IGetCountryByNamePayload ) => ( {
  type: types.GET_COUNTRY_BY_NAME_TRIGGER,
  payload
} )

export const resetCountryByName = () => ( { type: types.RESET_COUNTRY_BY_NAME } )
