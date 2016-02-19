app.controller('orderCtrl', ['$scope', '$state', '$modal','initData',
        function($scope, $state, $modal,initData) {
             $scope.orderdatas=initData.orderdatas;
            $scope.candisable=[true,true,true,true,true,true,true,true,true,true];
            $scope.change=function(index){
                console.log(index);
                $scope.candisable[index]=false;
            }

            $scope.sales=initData.sales;

            















}
    ])
