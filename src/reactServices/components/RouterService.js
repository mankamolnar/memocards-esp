import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import StoreProviderService from './StoreProviderService';
import Main from './../../views/Main';
import Play from './../../views/Play';

export default class RouterService extends React.Component {
  constructor() {
    super();
    this.storeProviderService = new StoreProviderService();
  }

  render() {
    const store = this.storeProviderService.newStore();

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/play/:category' component={Play}/>
            <Route component={() => (<h1>Shiiiit</h1>)}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
