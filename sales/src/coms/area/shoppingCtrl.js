app.controller('shoppingCtrl', ['$scope', '$state', '$modal','initData',
        function($scope, $state, $modal,initData) {

           
            $scope.sales=initData.sales;
           //计算总价
           $scope.allPrice=function(){
            $scope.Price=0;
            for (var i = 0; i < $scope.sales.length; i++) {
                $scope.Price+=$scope.sales[i].price*$scope.sales[i].count;
            };
           }
           $scope.allPrice();
           // 修改商品数量
           $scope.changeNum=function(value,index){
            if (value==1) {
                $scope.sales[index].count+=1;
            }else{
                $scope.sales[index].count-=1;
            }
            $scope.allPrice();
           }
           //删除一个商品
           $scope.deleteSales=function(index){
            $scope.sales.splice(index,1);
            console.log($scope.sales);
            $scope.allPrice();
           }
}
    ])
