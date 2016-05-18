import './header.scss';

import angular from 'angular';
import template from './header.html';

function daHeader() {
    return {
        restrict: 'E',
        scope: {
            company: '='
        },
        template: template
    }
}

export default angular.module('directives.header', [])
    .directive('daHeader', daHeader)
    .name;
