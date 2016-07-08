angular.module("snlApp", ["ionic", "firebase"])

.run(function($ionicPlatform, $rootScope, $firebaseAuth, $firebase, $window, $ionicLoading) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }



      // var config = {
      //       apiKey: "AIzaSyBxhExztPswNrrtepe3nq9HzSTsx3NdBbc",
      //       authDomain: "project-4082093448413601653.firebaseapp.com",
      //       databaseURL: "https://project-4082093448413601653.firebaseio.com",
      //       storageBucket: "project-4082093448413601653.appspot.com",
      //     };
          //firebase.initializeApp(config);

            console.log("firebase",  firebase);

       $rootScope.userEmail = null;
       // $rootScope.baseUrl = 'https://project-4082093448413601653.firebaseio.com/';
       // var authRef = new Firebase($rootScope.baseUrl);
       // $rootScope.auth = $firebaseAuth(authRef);
        $rootScope.auth = firebase;

        console.log("rootScope.auth",  $rootScope.auth);
        // console.log("rootScope.firebase",  $rootScope.firebase);

        $rootScope.show = function(text) {
            $rootScope.loading = $ionicLoading.show({
                content: text ? text : 'Loading..',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
        };

        $rootScope.hide = function() {
            $ionicLoading.hide();
        };

        $rootScope.notify = function(text) {
            $rootScope.show(text);
            $window.setTimeout(function() {
                $rootScope.hide();
            }, 1999);
        };

        $rootScope.logout = function() {
            $rootScope.auth.$logout();
            $rootScope.checkSession();
        };

        $rootScope.checkSession = function() {
            var auth = new FirebaseSimpleLogin(authRef, function(error, user) {
                if (error) {
                    // no action yet.. redirect to default route
                    $rootScope.userEmail = null;
                    $window.location.href = '#/auth/signin';
                } else if (user) {
                    // user authenticated with Firebase
                    $rootScope.userEmail = user.email;
                    $window.location.href = ('#/app/assets');
                } else {
                    // user is logged out
                    $rootScope.userEmail = null;
                    $window.location.href = '#/auth/signin';
                }
            });
        }







    });
})



 // .factory("CategoryFb", function($firebaseArray) {
 //   var CategoryRef = new Firebase("https://project-4082093448413601653.firebaseio.com/root/Category");
 //   return $firebaseArray(CategoryRef);
 // })



//.factory("Auth", function($firebaseAuth) {
//  var usersRef = new Firebase("https//project-4082093448413601653.firebaseio.com/users");
//  return $firebaseAuth(usersRef);
//})



.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

       .state('auth', {
            url: "/auth",
            abstract: true,
            templateUrl: "app/templates/auth.html"
        })
        .state('auth.signin', {
            url: '/signin',
            views: {
                'auth-signin': {
                    templateUrl: 'app/templates/auth-signin.html'
                }
            }
        })
        .state('auth.signup', {
            url: '/signup',
            views: {
                'auth-signup': {
                    templateUrl: 'app/templates/auth-signup.html'
                }
            }
        })



    .state('home', {
      abstract: true,
      url: "/home",
      templateUrl: "app/home/home.html"
    })

    .state('home.category', {
      url: "/category",
      views: {
        "tab-category": {
          templateUrl: "app/home/category.html"
        }
      }
    })

    .state('home.equipment', {
      url: "/equipment",
      views: {
        "tab-equipment": {
          templateUrl: "app/home/equipment.html"
        }
      }
    })

    .state('app', {
      abstract: true,
      url: "/app",
      templateUrl: "app/layout/menu-layout.html"
    })

    .state('app.assets', {
      url: "/assets",
      views: {
        'mainContent': {
          templateUrl: "app/assets/assets.html"
        }
      }
    })

    .state('app.asset-detail', {
      url: "/assets/:id",
      views: {
        'mainContent': {
          templateUrl: "app/assets/asset-detail.html"
        }
      }
    })

    .state('app.clients', {
      url: "/clients",
      views: {
        'mainContent': {
          templateUrl: "app/clients/clients.html"
        }
      }
    })


    .state('app.rentals', {
      url: "/rentals/:id",
      views: {
        'mainContent': {
          templateUrl: "app/rentals/rentals.html"
        }
      }
    })


    .state('app.schedule', {
      url: "/schedule",
      views: {
        'mainContent': {
          templateUrl: "app/schedule/schedule.html"
        }
      }
    })

    .state('app.locations', {
      url: "/locations",
      views: {
        'mainContent': {
          templateUrl: "app/locations/locations.html"
        }
      }
    })

    .state('app.rules', {
      url: "/rules",
      views: {
        'mainContent': {
          templateUrl: "app/rules/rules.html",
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/assets');
  //$urlRouterProvider.otherwise('/auth/signin');
});