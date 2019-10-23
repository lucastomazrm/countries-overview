import { action } from 'typesafe-actions';
import { CountryTypes, Country } from './types';

export const loadAllCountries = (region?: string) => action(CountryTypes.LOAD_ALL_COUNTRIES, region);
export const loadAllCountriesSuccess = (countries: Country[]) => action(CountryTypes.LOAD_ALL_COUNTRIES_SUCCESS, countries);
export const requestFailure = (error: string) => action(CountryTypes.REQUEST_FAILURE, error);
