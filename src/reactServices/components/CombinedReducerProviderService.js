import {combineReducers} from 'redux';

export default class CombinedReducerProviderService {
  getCombinedReducers() {
    const reducers = {};

    return combineReducers(reducers);
  }
}
