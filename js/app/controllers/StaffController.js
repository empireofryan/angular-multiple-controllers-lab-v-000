function StaffController() {
  var vm = this;

  vm.name = 'Jack Nicholson';
  vm.email = 'jack@overlookhotel.com';
  vm.phone = '123-456-7890';
}

angular
  .module('app')
  .controller('StaffController', StaffController);