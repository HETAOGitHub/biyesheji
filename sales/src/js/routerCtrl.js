app.controller('routerCtrl', ['$scope', '$rootScope', '$state', '$window', 'User',

    function($scope, $rootScope, $state, $window, User) {
        //请求身份信息
        // if ($window.sessionStorage.getItem('role') === null) {
        //     User.getUser({}, function(result) {
        //         $window.sessionStorage.setItem('schoolId', result.juser.schoolId);
        //         $window.sessionStorage.setItem('districtId', result.districtId);
        //         for (var i = 0; i < result.roles.length; i++) { //用户权限判断
        //             if (result.roles[i].id == 7) { //区管理员
        //                 $rootScope.isHome = true;
        //                 $rootScope.isSchoolHome = false;
        //                 $window.sessionStorage.setItem('role', 7);
        //                 $state.go('home');
        //                 break;
        //             } else if (result.roles[i].id == 4) { //校管理员
        //                 $rootScope.isHome = false;
        //                 $rootScope.isSchoolHome = true;
        //                 $window.sessionStorage.setItem('role', 4);
        //                 $state.go('schoolHome');
        //                 break;
        //             }
        //         }
        //         if ($window.sessionStorage.getItem('role') != 4 && $window.sessionStorage.getItem('role') != 7) {
        //             $rootScope.isHome = false;
        //             $rootScope.isSchoolHome = false;
        //             $state.go('error');
        //         }
        //     });
        // } else {
        //     if ($window.sessionStorage.getItem('role') == 7) { //区管理员
        //         $rootScope.isHome = true;
        //         $rootScope.isSchoolHome = false;
        //         $state.go('home');
        //     } else if ($window.sessionStorage.getItem('role') == 4) { //校管理员
        //         $rootScope.isHome = false;
        //         $rootScope.isSchoolHome = true;
        //         $state.go('schoolHome');
        //     } else {
        //         $rootScope.isHome = false;
        //         $rootScope.isSchoolHome = false;
        //         $state.go('error');
        //     }
        // }
    }
]);
