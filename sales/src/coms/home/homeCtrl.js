app.controller('homeCtrl', ["$scope", "$modal", "$rootScope", "$state", "Home",'$window',
    function($scope, $modal, $rootScope, $state, Home,$window) {

        $scope.imgdata1=[
        {id:001,name:"方向盘",img:"/assets/4.png",descripts:"商品描述",price:50,Saledate:'2016-2-1',Salecount:50,lbId:'0001'},
        {id:002,name:"儿童座椅",img:"/assets/5.png",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."},
       	{id:003,name:"汽车发电机",img:"/assets/6.png",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."},
       	{id:004,name:"机油滤清器",img:"/assets/7.png",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."},
       	{id:005,name:"高性能发动机油",img:"/assets/8.png",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."},
       	{id:006,name:"火花塞",img:"/assets/9.png",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."},
       	{id:007,name:"车用空气清新剂",img:"/assets/10.png",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."},
       	{id:008,name:"智能安全防盗器",img:"/assets/11.png",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."}
        ];
        $scope.imgdata2=[
        {img:"/assets/1.jpg",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."},
        {img:"/assets/2.jpg",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."},
        {img:"/assets/3.jpg",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."}
        ];
        $scope.valueHome="热销商品";
        $scope.imgdata=$scope.imgdata1;
        $scope.change=function(value){
        	console.log(value);
        	console.log("value");

        	$scope.valueHome=value;
        	$scope.imgdata=[];
        	$scope.imgdata=$scope.imgdata2;
        }

    }

])
