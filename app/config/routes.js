var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

var Main = require('../components/Main');
var Home = require('../components/Home');
var StarredRepos = require('../components/StarredRepos');

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="/stars/:username" component={StarredRepos}>

    </Route>
  </Route>
);