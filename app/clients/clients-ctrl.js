(function () {
    'use strict';

    angular.module('snlApp').controller('ClientsCtrl', ['$state', 'snlApi', ClientsCtrl]);

    function ClientsCtrl($state, snlApi) {
        var vm = this;
        
        var data = snlApi.getClients();
       // var data = snlApi.getEquipmentData();


        console.log(data);
        vm.Clients = data.ClientCompany;
       // vm.Clients = data.AssetService.Equipment;
       // console.log(vm.Clients);

       vm.selectClient = function(id){
            //TODO: select correct category
            //mock navigate to app.Equipment
             $state.go("app.assets");
         }

    };
})();