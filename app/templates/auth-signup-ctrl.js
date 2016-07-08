(function () {
    'use strict';

    angular.module('snlApp').controller('SignUpCtrl', [
        '$scope', '$rootScope', '$firebaseAuth', '$window', SignUpCtrl]);



    function SignUpCtrl($scope, $rootScope, $firebaseAuth, $window) {
        var vm = this;
        $scope.user = {
            email: "",
            password: ""
        };
        

        $scope.createUser = function() {
            var email = $scope.user.email;
            var password = $scope.user.password;
            if (!email || !password) {
                $rootScope.notify("Please enter valid credentials");
                return false;
            }
            $rootScope.show('Please wait.. Registering');

            console.log($scope.user);



                console.log(email);
                console.log(password);


            firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
                    $rootScope.notify('Login Authenticated');
                    
                    $rootScope.hide();
                    $rootScope.userEmail = user.email;
                    $window.location.href = ('#/app/assets');
                }, function(error) {
                    $rootScope.hide();
                    if (error.code == 'INVALID_EMAIL') {
                        $rootScope.notify('Invalid Email Address');
                    } else if (error.code == 'INVALID_PASSWORD') {
                        $rootScope.notify('Invalid Password');
                    } else if (error.code == 'INVALID_USER') {
                        $rootScope.notify('Invalid User');
                    } else {
                        $rootScope.notify('Oops something went wrong. Please try again later');
                    }
                });



        //var ref = new Firebase("https://project-4082093448413601653.firebaseio.com");
        // firebase.createUser({
        //   email    : "email",
        //   password : "password"
        // }, function(error, userData) {
        //   if (error) {
        //     console.log("Error creating user:", error);
        //   } else {
        //     console.log("Successfully created user account with uid:", userData.uid);
        //   }
        // });

        //     $rootScope.auth.$createUser(email, password, function(error, user) {
        //         if (!error) {
        //             $rootScope.hide();
        //             $rootScope.userEmail = user.email;
        //             $window.location.href = ('#/app/assets');
        //         } else {
        //             $rootScope.hide();
        //             if (error.code == 'INVALID_EMAIL') {
        //                 $rootScope.notify('Invalid Email Address');
        //             } else if (error.code == 'EMAIL_TAKEN') {
        //                 $rootScope.notify('Email Address already taken');
        //             } else {
        //                 $rootScope.notify('Oops something went wrong. Please try again later');
        //             }
        //         }
        //     });
        // }
    }


}
})(); 


