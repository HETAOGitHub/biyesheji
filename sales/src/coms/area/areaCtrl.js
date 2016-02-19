app.controller('areaCtrl', ['$scope', '$state', '$modal','initData',
        function($scope, $state, $modal,initData) {

             $scope.orderdatas=initData.orderdatas;

            $scope.candisable=[true,true,true,true,true,true,true,true,true,true];
            $scope.change=function(index){
                console.log(index);
                $scope.candisable[index]=false;
            }
            //清空数据
            $scope.initData=function(){
                $scope.saleName=''
                $scope.saleType='';
                $scope.saleTypeId='';
                $scope.price='';
                $scope.cutPrice='';
                $scope.count='';
                $scope.descripts='';
                $scope.saleImg='';
            }
            $scope.initData();

            $scope.typeDate=[
                {name:"火花塞",id:1},
                {name:"后视镜",id:2},
                {name:"轮胎",id:3},
                {name:"雨刷片",id:4},
                {name:"涡轮增压",id:5}
            ]
            //修改类型。获得类型名称与ID
            $scope.changeType=function(name,id){
                // console.log($scope.saleName);
                // console.log(this.saleName);
                $scope.saleType=name;
                $scope.saleTypeId=id;
            }
            //增加商品。获得商品属性，将已获得的商品属性发送给后台，存入数据库。
            $scope.add=function(){
            var str=document.getElementById("inputfile").value;
            var arr=str.split('\\');//注split可以用字符或字符串分割 
            $scope.sale=[];
            $scope.saleImg="assets/"+arr[arr.length-1];//这就是要取得的图片名称 
                console.log($scope.saleName);
                console.log($scope.saleType);
                console.log($scope.price);
                console.log($scope.cutPrice);
                console.log($scope.count);
                console.log($scope.descripts);
                console.log($scope.saleImg);
                $scope.sale.name=$scope.saleName;
                $scope.sale.lbId=$scope.saleTypeId;
                $scope.sale.id='5664';
                $scope.sale.Salecount=$scope.count;
                $scope.sale.price=$scope.price;
                $scope.sale.address='广东省番禺区外环东路';
                $scope.sale.salePrice=$scope.price*($scope.cutPrice/10);
                $scope.sale.img=$scope.saleImg;
                $scope.sale.descripts=$scope.descripts;
                $scope.sale.img=$scope.saleImg;
                $scope.sale.Saledate='2016-2-17'
                console.log($scope.sale);
                initData.imgdata1.push($scope.sale);
            }
















}
    ])
