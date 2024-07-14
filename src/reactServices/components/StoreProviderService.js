import {createStore} from 'redux';
import CombinedReducerProviderService from './CombinedReducerProviderService';

export default class StoreProviderService {
  constructor() {
    this.combinedReducerProviderService = new CombinedReducerProviderService();
  }

  newStore() {
    return createStore(
        this.combinedReducerProviderService.getCombinedReducers());
  }
}
