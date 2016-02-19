app.controller('homeCtrl', ["$scope", "$modal", "$rootScope", "$state", "Home",'$window','initData',
    function($scope, $modal, $rootScope, $state, Home,$window,initData) {

        $scope.imgdata1=initData.imgdata1;
        $scope.imgdata2=initData.imgdata2;
        $scope.valueHome="热销商品";
        $scope.imgdata=$scope.imgdata1;
        //更改商品类别
        $scope.change=function(value){
        	console.log(value);
        	console.log("value");

        	$scope.valueHome=value;
        	$scope.imgdata=[];
        	$scope.imgdata=$scope.imgdata2;
        }
        //加入购物车
        // $scope.addToCar=function(id){
        //   console.log(id);
        //   for (var i = 0; i < $scope.imgdata1.length; i++) {
        //     if ($scope.imgdata1[i].id==id) {
        //       $scope.sale=$scope.imgdata1[i];
        //     }
        //   }
        //   console.log($scope.sale.name);
        //   for (var i = 0; i < initData.sales.length; i++) {
        //     if (initData.sales[i].name==$scope.sale.name) {
        //       alert("购物车中已存在该商品");
        //       return;
        //     }
        //   }
        //   initData.sales.push($scope.sale);
        //   alert("添加成功");
        // }

        //获取商品详细信息
        $scope.goToDetail=function(id){
          for (var i = 0; i < $scope.imgdata1.length; i++) {
            if ($scope.imgdata1[i].id==id) {
              $scope.imgdata=$scope.imgdata1[i];
            }
          }
          var saleDetailData={
            saleId:$scope.imgdata.id,
            name:$scope.imgdata.name,
            price:$scope.imgdata.price,
            salePrice:$scope.imgdata.salePrice,
            address:$scope.imgdata.address,
            img:$scope.imgdata.img
          }
          initData.saleDetail=saleDetailData;
          console.log($scope.imgdata);
        }






    }

])
