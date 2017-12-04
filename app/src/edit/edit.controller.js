'use strict';

function EditController (SecretAPI, $routeParams, $location) {
  var vm = this;

  vm.failed = false;
  vm.person = {};
  vm.onSave = onSave;

  function onSave() {
    SecretAPI.update(vm.person, function () {
      $location.path('/home');
    });
  }

  SecretAPI.get({ id: $routeParams.id }, function (person) {
    vm.person = person;
  });
}

EditController.$inject = ['SecretAPI', '$routeParams', '$location'];

angular
  .module('k121.Edit', [])
  .controller('EditController', EditController);
