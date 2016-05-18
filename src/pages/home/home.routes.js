routes.$inject = ['$stateProvider'];

import template from './home.html';

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: template,
            controller: 'HomeController',
            controllerAs: 'home'
        });
}
