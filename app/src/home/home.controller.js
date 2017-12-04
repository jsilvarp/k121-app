'use strict';

function HomeController ($scope, $location, $route, SecretAPI, DrawAPI) {
  var vm = this;

  vm.loading = false;
  vm.failed = false;
  vm.buttonDisabled = false;
  vm.tableConfig = {};
  vm.doDraw = doDraw;

  vm.tableConfig = {
    columns: [
      {
        title: 'Nome',
        column: 'name',
        type: 'text'
      },
      {
        title: 'Email',
        column: 'email',
        type: 'text'
      },
      {
        title: 'Amigo Secreto',
        column: 'friend',
        type: 'text'
      },
      {
        type: 'button',
        iconClass: 'fa fa-edit',
        onClick: onEdit
      },
      {
        type: 'button',
        iconClass: 'fa fa-trash',
        onClick: onDelete
      }
    ]
  };

  init();

  function onDelete (data, index) {
    if (confirm('Se você apagar um membro do amigo secreto será realizado um novo sorteio.\n\nDeseja prosseguir?')) {
      SecretAPI.delete({ id: data._id }, doDraw);
    }
  }

  function onEdit (data, index) {
    $location.path('/edit/' + data._id);
  }

  function init () {
    vm.loading = true;

    SecretAPI.query(function (resp) {
      vm.tableConfig.data = resp;
      vm.loading = false;
    });
  }

  function doDraw () {
    vm.buttonDisabled = true;
    vm.loading = true;

    DrawAPI.query(function(people) {
      vm.tableConfig.data = people;
      vm.buttonDisabled = false;
      vm.loading = false;
    });
  }
}

HomeController.$inject = ['$scope', '$location', '$route', 'SecretAPI', 'DrawAPI'];

angular
  .module('k121.Home', [])
  .controller('HomeController', HomeController);
