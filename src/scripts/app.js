"use-strict";
var angular = require('angular');
var uiRouter = require('@uirouter/angularjs');
var pagination = require('angular-utils-pagination');
var sanitize = require('angular-sanitize');
var animate = require('angular-animate');
var touch = require('angular-touch');
var uiBootstrap = require('angular-ui-bootstrap');

var app = angular.module('FinderChallenge', ['ui.router','angularUtils.directives.dirPagination','ngSanitize','ngAnimate','ui.bootstrap']);

//call global
//require('./global')

require('./run');

require('./config-html5');

//config ui router
require('./routes-config');


/*
* Controller
*/
require('./main-ctrl');
require('./catalog-ctrl');
