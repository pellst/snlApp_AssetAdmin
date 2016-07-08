(function () {
    'use strict';

    angular.module('snlApp').controller('SignInCtrl', [
        '$scope', '$rootScope', '$firebaseAuth', '$window', SignInCtrl]);



    function SignInCtrl($scope, $rootScope, $firebaseAuth, $window) {

            var vm = this;


           


            // check session
            //$rootScope.checkSession();

            $scope.user = {
                email: "",
                password: ""
            };
            $scope.validateUser = function() {
                $rootScope.show('Please wait.. Authenticating');
                 var email = $scope.user.email;
                 var password = $scope.user.password;                
  
                if (!email || !password) {
                    $rootScope.notify("Please enter valid credentials");
                    return false;
                }
                console.log($scope.user);



                console.log(email);
                console.log(password);


                 console.log("signin rootScope.auth",  $rootScope.auth);
                // user, password

                //var ref = new Firebase("https://project-4082093448413601653.firebaseio.com");

        /* All good, let's authentify */
        // $rootScope.auth.$authWithPassword({
        //     email    : $scope.user.email,
        //     password : $scope.user.password
        // }).then(function (authData) {
        //     console.log(authData);
        //     $rootScope.hide();
        // }).catch(function (error) {
        //     console.log(error);
        //     $rootScope.hide();
        //     $rootScope.notify('Error','Email or Password is incorrect!');
        //          if (error.code == 'INVALID_EMAIL') {
        //                 $rootScope.notify('Invalid Email Address');
        //             } else if (error.code == 'INVALID_PASSWORD') {
        //                 $rootScope.notify('Invalid Password');
        //             } else if (error.code == 'INVALID_USER') {
        //                 $rootScope.notify('Invalid User');
        //             } else {
        //                 $rootScope.notify('Oops something went wrong. Please try again later');
        //             }            
        // });








                firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
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
                }



               );



               // .catch(function(error) {
               //  // Handle Errors here.
               //  var errorCode = error.code;
               //  var errorMessage = error.message;
               //    $rootScope.hide();
               //      if (error.code == 'INVALID_EMAIL') {
               //          $rootScope.notify('Invalid Email Address');
               //      } else if (error.code == 'INVALID_PASSWORD') {
               //          $rootScope.notify('Invalid Password');
               //      } else if (error.code == 'INVALID_USER') {
               //          $rootScope.notify('Invalid User');
               //      } else {
               //          $rootScope.notify('Oops something went wrong. Please try again later');
               //      }                
               // 
               //  }


                
                // $rootScope.hide();
                // $rootScope.userEmail = $scope.user.email;
                // $window.location.href = ('#/app/assets');

                // ref.authWithPassword({
                //   email    : "email",
                //   password : "password"
                // }, function(error, authData) {
                //   if (error) {
                //     console.log("Login Failed!", error);
                //   } else {
                //     console.log("Authenticated successfully with payload:", authData);
                //   }
                // });             



               

                // $rootScope.auth().signOut().then(function() {
                //   // Sign-out successful.
                // }, function(error) {
                //   // An error happened.
                // });                

                // $rootScope.auth.$login('password', {
                //     email: email,
                //     password: password
                // }).then(function(user) {
                //     $rootScope.hide();
                //     $rootScope.userEmail = user.email;
                //     $window.location.href = ('#/app/assets');
                // }, function(error) {
                //     $rootScope.hide();
                //     if (error.code == 'INVALID_EMAIL') {
                //         $rootScope.notify('Invalid Email Address');
                //     } else if (error.code == 'INVALID_PASSWORD') {
                //         $rootScope.notify('Invalid Password');
                //     } else if (error.code == 'INVALID_USER') {
                //         $rootScope.notify('Invalid User');
                //     } else {
                //         $rootScope.notify('Oops something went wrong. Please try again later');
                //     }
                // });
            }
        }


})(); 

