const REST_COUNTRIES_API_URL = 'https://restcountries.eu/rest/v2'

export const api = {
  getAll: () => `${REST_COUNTRIES_API_URL}/all`,
  getCountriesByRegion: ( region: string ) => `${REST_COUNTRIES_API_URL}/region/${region}`,
  getCountryByName: ( name: string ) => `${REST_COUNTRIES_API_URL}/name/${name}`
}
