(function () {
    'use strict';

    angular.module('snlApp').controller('AssetDetailCtrl', ['$stateParams', '$state', 'snlApi', AssetDetailCtrl]);

    function AssetDetailCtrl($stateParams, $state, snlApi) {
        var vm = this;
        
        console.log("$stateParams", $stateParams);
       // vm.assetID = Number($stateParams.id);
        vm.lookupCatID = $stateParams.id;
        console.log($stateParams.id);
       // vm.assetID = Number("20");

        var data = snlApi.getEquipmentData();
        console.log(data);
        //vm.Assets = data;
         vm.Assets2 = data.AssetService;

         vm.rented = false;



//.flatten("divisionTeams")

        var segment = _.chain(vm.Assets2)
                    .flatten("categoryName")
                    .find({ "catID": vm.lookupCatID })
                    .value();

        vm.segmentName = segment.categoryName;
        console.log(segment);

        vm.Assets3 = segment.Equipment;


         vm.selectEquipment = function(id){
            //TODO: select correct Equipment
            //mock navigate to app.Equipment
             $state.go("home.equipment");
         }


        

/*        vm.games = _.chain(data.games)
                    .filter(isTeamInGame)
                    .map(function (item) {
                        var isTeam1 = (item.team1Id === vm.teamId ? true : false);
                        var opponentName = isTeam1 ? item.team2 : item.team1;
                        var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score, item.team2Score);
                        return {
                            gameId: item.id,
                            opponent: opponentName,
                            time: item.time,
                            location: item.location,
                            locationUrl: item.locationUrl,
                            scoreDisplay: scoreDisplay,
                            homeAway: (isTeam1 ? "vs." : "at")
                        };
                    })
                    .value();

        vm.teamStanding = _.chain(data.standings)
                           .flatten("divisionStandings")
                           .find({ "teamId": vm.teamId })
                           .value();

        vm.following = false;

        vm.toggleFollow = function(){

            if (vm.following) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Unfollow?',
                    template: 'Are you sure you want to unfollow?'
                });
                confirmPopup.then(function(res) {
                    if(res) {
                        vm.following = !vm.following;
                    }
                });
            } else{
                vm.following = !vm.following;
            }
        };


        function isTeamInGame(item){
            return item.team1Id === vm.teamId || item.team2Id === vm.teamId;
        }

        function getScoreDisplay(isTeam1, team1Score, team2Score) {
            if (team1Score && team2Score) {
                var teamScore = (isTeam1 ? team1Score : team2Score);
                var opponentScore = (isTeam1 ? team2Score : team1Score);
                var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
                return winIndicator + teamScore + "-" + opponentScore;
            }
            else {
                return "";
            }
        }*/











    };
})();