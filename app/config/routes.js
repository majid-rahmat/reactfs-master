import React from 'react';
import ReactRouter from 'react-router';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import HhandiContainer from '../containers/HhandiContainer';
import Hhandi1Container from '../containers/Hhandi1Container';
import Hhandi1 from '../components/Hhandi1';
import Hhandi from '../components/Hhandi';
import EpisodesContainer from '../containers/EpisodesContainer';
import Episodes1Container from '../containers/Episodes1Container';
import Admin from '../containers/Admin';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';
import AddArticle from '../containers/AddArticle';
import EditArticle from '../containers/EditArticle';
import AddVid from '../containers/AddVid';
import EditVid from '../containers/EditVid';
import Example from '../components/example'

const routes = (
  <Router history={hashHistory}>
    
    <Route path="/" component={Main}>
    	<IndexRoute component={HomeContainer} />
    	
    	<Route path="/hhandi" component={Hhandi} >
        <IndexRoute component={Example} />
    	<Route path="/hhandi/:hiphopandi" component={Hhandi1} />
        </Route> 
    	
        <Route path="/episodes" component={EpisodesContainer} />
    	<Route path="/episodes/:epi" component={Episodes1Container} />
    
        <Route path="/admin" component={Admin} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/addarticle" component={AddArticle} />
        <Route path="/editarticle" component={EditArticle} />
        <Route path="/addvideo" component={AddVid} />
        <Route path="/editvideo" component={EditVid} />

    </Route>
  </Router>
);

export default routes;