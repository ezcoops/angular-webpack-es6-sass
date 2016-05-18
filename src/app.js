import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

import directives from './directives/index';
import pages from './pages/index';

angular.module('app', [uirouter, pages, directives])
    .config(routing);
