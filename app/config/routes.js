import React from 'react';
import ReactRouter from 'react-router';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import HhandiContainer from '../containers/HhandiContainer';
import Hhandi1Container from '../containers/Hhandi1Container';
import EpisodesContainer from '../containers/EpisodesContainer';
import Episodes1Container from '../containers/Episodes1Container';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	<IndexRoute component={HomeContainer} />
    	<Route path="/hhandi" component={HhandiContainer} />
    	<Route path="/hhandi/:hiphopandi" component={Hhandi1Container} /> 
    	<Route path="/episodes" component={EpisodesContainer} />
    	<Route path="/episodes/:epi" component={Episodes1Container} />
    </Route>
  </Router>
);

export default routes;