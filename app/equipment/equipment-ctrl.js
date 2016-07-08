(function () {
    'use strict';

    angular.module('snlApp').controller('EquipmentCtrl', ['$state', 'snlApi', EquipmentCtrl]);

    function EquipmentCtrl($state, snlApi) {
        var vm = this;
        
        var data = snlApi.getEquipment();

        console.log(data);
        vm.Equipment = data.AssetService.Equipment;

         vm.selectEquipment = function(id){
            //TODO: select correct Equipment
            //mock navigate to app.Equipment
             $state.go("app.assets");
         }

    };
})();