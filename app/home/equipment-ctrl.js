(function () {
    'use strict';

    angular.module('snlApp').controller('EquipmentCtrl', ['$state', 'snlApi', EquipmentCtrl]);

    function EquipmentCtrl($state, snlApi) {
        var vm = this;
        
        var data = snlApi.getInventoryData();
       // var data = snlApi.getEquipmentData();


        console.log(data);
        vm.Equipment = data.AssetRecord.Equipment;
       // vm.Equipment = data.AssetService.Equipment;
       // console.log(vm.Equipment);

         vm.selectEquipment = function(id){
            //TODO: select correct Equipment
            //mock navigate to app.Equipment
             $state.go("home.equipment");
         }

    };
})();