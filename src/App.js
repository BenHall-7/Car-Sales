import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import CarSelect from './components/CarSelect';

import {reducer} from './reducers/index';

const App = () => {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={CarSelect}/>
        <Route path="/features" render={() => 
          <div className="boxes">
            <div className="box">
              <Header/>
              <AddedFeatures/>
            </div>
            <div className="box">
              <AdditionalFeatures/>
              <Total/>
            </div>
          </div>
        }/>
      </Router>
    </Provider>
  );
};

export default App;
