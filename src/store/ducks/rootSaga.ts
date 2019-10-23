import { all, takeLatest } from 'redux-saga/effects';
import { CountryTypes } from './country/types';
import { getCountries } from './country/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(CountryTypes.LOAD_ALL_COUNTRIES, getCountries),
  ]);
}
