function ContactController() {
  var vm = this;

  vm.name = 'Stanley Kubrick';
  vm.email = 'skubrick@wb.com';
  vm.phone = '310-555-5555';

  vm.changeName = function () {
    vm.name = 'Celluloid Genius';
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController);