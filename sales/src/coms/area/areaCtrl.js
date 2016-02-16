app.controller('areaCtrl', ['$scope', '$state', '$modal',
        function($scope, $state, $modal) {

             $scope.orderdatas=[{Id:001,Orderid:0663987123456,
            Userid:01,Realname:"何涛",SaleName:"安全椅,方向盘把套",
            Address:"广东省番禺区外环东路",Zipcode:515429,
            Tel:"13570577038",Payment:'在线支付',
            Email:"1019872217@qq.com","Memo":"注意安全",
            tag:"1",Price:"200",Time:"2015/5/22 9:38:29"},
            {Id:001,Orderid:0663987123456,
            Userid:01,Realname:"何涛",SaleName:"安全椅,方向盘把套",
            Address:"广东省番禺区外环东路",Zipcode:515429,
            Tel:"13570577038",Payment:'在线支付',
            Email:"1019872217@qq.com","Memo":"注意安全",
            tag:"1",Price:"200",Time:"2015/5/22 9:38:29"},
            {Id:001,Orderid:0663987123456,
            Userid:01,Realname:"何涛",SaleName:"安全椅,方向盘把套",
            Address:"广东省番禺区外环东路",Zipcode:515429,
            Tel:"13570577038",Payment:'在线支付',
            Email:"1019872217@qq.com","Memo":"注意安全",
            tag:"1",Price:"200",Time:"2015/5/22 9:38:29"},
            {Id:001,Orderid:0663987123456,
            Userid:01,Realname:"何涛",SaleName:"安全椅,方向盘把套",
            Address:"广东省番禺区外环东路",Zipcode:515429,
            Tel:"13570577038",Payment:'在线支付',
            Email:"1019872217@qq.com","Memo":"注意安全",
            tag:"1",Price:"200",Time:"2015/5/22 9:38:29"},
            {Id:001,Orderid:0663987123456,
            Userid:01,Realname:"何涛",SaleName:"安全椅,方向盘把套",
            Address:"广东省番禺区外环东路",Zipcode:515429,
            Tel:"13570577038",Payment:'在线支付',
            Email:"1019872217@qq.com","Memo":"注意安全",
            tag:"1",Price:"200",Time:"2015/5/22 9:38:29"}];

            $scope.candisable=[true,true,true,true,true,true,true,true,true,true];
            $scope.change=function(index){
                console.log(index);
                $scope.candisable[index]=false;
            }

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
            $scope.saleImg="D:/bysj/"+arr[arr.length-1];//这就是要取得的图片名称 
                console.log($scope.saleName);
                console.log($scope.saleType);
                console.log($scope.price);
                console.log($scope.cutPrice);
                console.log($scope.count);
                console.log($scope.descripts);
                console.log($scope.saleImg);


            }
















}
    ])
