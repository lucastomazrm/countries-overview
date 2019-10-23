import { Reducer } from 'redux';
import { CountryState, CountryTypes } from './types';

const INITIAL_STATE: CountryState = {
  error: '',
  loading: false,
  data: [],
};

const reducer: Reducer<CountryState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountryTypes.LOAD_ALL_COUNTRIES:
      return { ...state, loading: true };
    case CountryTypes.LOAD_ALL_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload,
      };
    case CountryTypes.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
