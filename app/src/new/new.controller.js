'use strict';

function NewController (SecretAPI, $location) {
  var vm = this;

  vm.failed = false;
  vm.person = {};
  vm.onSave = onSave;

  function onSave() {
    SecretAPI.save(vm.person, function () {
      $location.path('/home');
    });
  }
}

NewController.$inject = ['SecretAPI', '$location'];

angular
  .module('k121.New', [])
  .controller('NewController', NewController);
