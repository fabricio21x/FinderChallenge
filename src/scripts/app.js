"use-strict";
var angular = require('angular');
var uiRouter = require('@uirouter/angularjs');
var pagination = require('angular-utils-pagination');
var sanitize = require('angular-sanitize');

var app = angular.module('FinderChallenge', ['ui.router','angularUtils.directives.dirPagination','ngSanitize']);

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
