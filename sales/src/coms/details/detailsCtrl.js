app.controller('detailsCtrl', ['$scope', '$filter', 'RankData', '$rootScope', '$state','$window','initData',
    function($scope, $filter, RankData, $rootScope, $state,$window,initData) {
        //不是区管理员，跳到校管理员页面s
        // if ($window.sessionStorage.getItem('role')==4) {
        //     $state.go('schoolHome');
        // }
        // if ($window.sessionStorage.getItem('role') != 4 && $window.sessionStorage.getItem('role') != 7) {
        //     $state.go('error');
        // }
        console.log("加载成功");
        //获取商品参数
        $scope.parameterData=initData.parameterdata;

        $scope.itemsByPage=10;
        //获取商品评价
        $scope.evaluateData=initData.evaluatedata;
             console.log(initData.orderdatas);
        //获取订单信息
        $scope.orderDatas=initData.orderdatas;

        //获取商品详细信息
        $scope.detailsDate=initData.saleDetail;
        console.log($scope.detailsDate);

        $scope.tranModes=[
            '快递运输',
            '邮政运输',
            '铁路运输'
        ];

        $scope.tranMode='';
        //修改运输方式
        $scope.changeTranMode=function(value){
            $scope.tranMode=value;
        }

        $scope.saleNum=1;
        //修改商品数量
        $scope.changNum=function(value){
            if (value==1) {
                $scope.saleNum+=1;
            }else{
                if ($scope.saleNum!=0) {
                    $scope.saleNum-=1;
                }
            }
        }

        //加入购物车
        $scope.addToCar=function(id){
          $scope.detailsDate.tranMode=$scope.tranMode;
          $scope.detailsDate.count=$scope.saleNum;
          for (var i = 0; i < initData.sales.length; i++) {
            if (initData.sales[i].name==$scope.detailsDate.name) {
              alert("购物车中已存在该商品");
              return;
            }
          }
          initData.sales.push($scope.detailsDate);
          console.log($scope.detailsDate);
          console.log(initData.sales);
          alert("添加成功");
        }


    }
]);
