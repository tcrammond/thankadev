var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

var Main = require('../components/views/Main');
var Home = require('../components/views/Home');
var StarredRepos = require('../components/views/StarredRepos');

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="/stars/:username" component={StarredRepos}>

    </Route>
  </Route>
);