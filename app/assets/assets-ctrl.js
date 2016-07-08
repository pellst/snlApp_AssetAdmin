(function () {
    'use strict';

    angular.module('snlApp').controller('AssetsCtrl', ['$state','snlApi', AssetsCtrl]);

    function AssetsCtrl($state,snlApi) {
        var vm = this;
        
        //var data = snlApi.getCategory();
         var data = snlApi.getEquipmentData();
        console.log(data);
        //vm.Assets = data;
         vm.Assets = data.AssetService;
        // console.log(vm.Assets);
       // console.log(vm.Assets);

        vm.selectAssets = function(id){
            //TODO: select correct category
            //mock navigate to app.Equipment
             $state.go("app.asset-detail");
         }

    };
})();