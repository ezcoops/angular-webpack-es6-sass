export default class HomeController {
    constructor($log) {
        this.name = 'World';
        $log.warn('HomeController', this);
    }

    changeName() {
        this.name = 'hash ' + Math.random();
    }
}

HomeController.$inject = ['$log'];
