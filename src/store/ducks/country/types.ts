/**
 * Action types
 */

export enum CountryTypes {
  LOAD_ALL_COUNTRIES = '@Country/LOAD_ALL_COUNTRIES',
  LOAD_ALL_COUNTRIES_SUCCESS = '@Country/LOAD_ALL_COUNTRIES_SUCCESS',
  REQUEST_FAILURE = '@Country/REQUEST_FAILURE',
}

/**
 * Data types
 */

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: number;
  currencies: Currency[];
  languages: Language[];
  translations: any;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
}

/**
 * State type
 */
export interface CountryState {
  readonly data: Country[];
  readonly loading: boolean;
  readonly error: string;
}
