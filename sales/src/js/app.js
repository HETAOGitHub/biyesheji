var app = angular.module('statis', ['ui.router', 'ui.bootstrap', "highcharts-ng", 'smart-table', 'ngResource'])
    .run(['$rootScope', '$state', '$stateParams', '$http', 'User',
        function($rootScope, $state, $stateParams, $http, User) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('router', {
                url: "/",
                views: {
                    'container': {
                        templateUrl: "router.html",
                        controller: 'routerCtrl'
                    }
                }
            })
            .state('error', {
                url: "/error",
                views: {
                    'container': {
                        templateUrl: "error.html"
                    }
                }
            })
            .state('home', {
                url: "/home",
                views: {
                    'container': {
                        templateUrl: "coms/home/home.html",
                        controller: 'homeCtrl'
                    }
                }
            })
            
        .state('detail', {
            url: "/detail",
            views: {
                "container": {
                    templateUrl: "coms/details/views/details.html",
                        controller: 'detailsCtrl'
                }
            }
        })
            .state('detail.info', {
                url: "/info/:infoId",
                views: {
                    'detail': {
                        templateUrl: "coms/details/views/details-info.html",
                        controller: 'detailsCtrl'
                    }
                }
            })

            .state('detail.parameter', {
                url: "/parameter",
                views: {
                    'parameter': {
                        templateUrl: "coms/details/views/details-parameter.html",
                        controller: 'detailsCtrl'
                    }
                }
            })

            .state('detail.evaluate', {
                url: "/evaluate",
                views: {
                    'parameter': {
                        templateUrl: "coms/details/views/details-evaluate.html",
                        controller: 'detailsCtrl'
                    }
                }
            })

            .state('shopping', {
                url: "/shopping",
                views: {
                    'container': {
                        templateUrl: "coms/area/shopping.html",
                        controller: 'detailsCtrl'
                    }
                }
            })

            .state('orderInfo', {
                url: "/orderInfo",
                views: {
                    'container': {
                        templateUrl: "coms/area/orderInfo.html",
                        controller: 'detailsCtrl'
                    }
                }
            })

             .state('pay', {
                url: "/pay",
                views: {
                    'container': {
                        templateUrl: "coms/area/pay.html",
                        controller: 'detailsCtrl'
                    }
                }
            })

            .state('success', {
                url: "/success",
                views: {
                    'container': {
                        templateUrl: "coms/area/success.html",
                        controller: 'detailsCtrl'
                    }
                }
            })
            .state('myorder', {
                url: "/myorder",
                views: {
                    'container': {
                        templateUrl: "coms/area/myorders.html",
                        controller: 'detailsCtrl'
                    }
                }
            })
            .state('login',{
                url:"/login",
                views:{
                    'container':{
                        templateUrl:"coms/login/login.html",
                        controller:'loginCtrl'
                    }
                }
            })
            .state('add',{
                url:"/add",
                views:{
                    'container':{
                        templateUrl:"coms/area/add.html",
                        controller:'areaCtrl'
                    }
                }
            })
            .state('all',{
                url:"/all",
                views:{
                    'container':{
                        templateUrl:"coms/area/allorders.html",
                        controller:'areaCtrl'
                    }
                }
            })

        $urlRouterProvider
            .otherwise("/home");

    })


.controller('mainCtrl', function($scope, $rootScope, $state, $window, User) {
    //首页、排名、详情选项卡切换样式变化,同时检查是显示区管理员页面还是校管理员页面
    $scope.role=2;
    setInterval(function() {
        $scope.$apply(function() {
            // $scope.isHome = ($window.sessionStorage.getItem('role') == 7) ? true : false;
            // $scope.isSchoolHome = ($window.sessionStorage.getItem('role') == 4) ? true : false;
            $scope.whichTab = [];
            $scope.whichTab[0] = (/\/home/g.test(location)) || (/\/schoolHome/g.test(location));
            $scope.whichTab[1] = /\/rank/g.test(location);
            $scope.whichTab[2] = /\/details/g.test(location);
        })
    }, 1000);
});
