(function () {
    'use strict';

    angular.module('snlApp').controller('CategoryCtrl', ['$state', 'snlApi', CategoryCtrl]);

    function CategoryCtrl($state, snlApi) {
        var vm = this;


        //$scope.items = CategoryFb;
        
        var data = snlApi.getCategory();
       // var data = snlApi.getEquipmentData();


        console.log(data);
        vm.Category = data.Category;
       // vm.Category = data.AssetService.Equipment;
       // console.log(vm.Category);

         vm.selectCategory = function(id){
            //TODO: select correct category
            //mock navigate to app.Equipment
             $state.go("home.equipment");
         }


          // $scope.addItem = function() {
          //   var categoryName = prompt("Add an Equipment Category?");
          //   if (categoryName) {
          //     $scope.items.$add({
          //       "categoryName": categoryName
          //     });
          //   }
          // };


    };
})();