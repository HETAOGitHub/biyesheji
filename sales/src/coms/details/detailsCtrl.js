app.controller('detailsCtrl', ['$scope', '$filter', 'RankData', '$rootScope', '$state','$window',
    function($scope, $filter, RankData, $rootScope, $state,$window) {
        //不是区管理员，跳到校管理员页面s
        // if ($window.sessionStorage.getItem('role')==4) {
        //     $state.go('schoolHome');
        // }
        // if ($window.sessionStorage.getItem('role') != 4 && $window.sessionStorage.getItem('role') != 7) {
        //     $state.go('error');
        // }
        console.log("加载成功");
        $scope.initdata=[
        {brand:"品牌",brandValue:"宝马系类"},
        {brand:"类别",brandValue:"安全椅"},
        {brand:"表层材质",brandValue:"真皮"},
        {brand:"上架时间",brandValue:"2015/5/22 9:38:29"}];

        $scope.itemsByPage=10;
        $scope.initdata1 = [
            {username: "纲手",content:"质量很好，安装方便结实，非常满意", 
                price: 199.00},
            {username: "雷柏", content: "很满意，最满意的一次网购，从包装到座椅质量、材质，都很不错，颜色比想象中好看，男宝宝女宝宝用都洋气，很有高大上的感觉。", 
                price: 139.00},
            {username: "雏田", content: "宝贝已经收到了，质量挺好的，买之前也去了几家实体店，看了看没找到合适的，没想到在网上买到了这么中意的，好评。", 
                price: 84.20},
            {username: "纲手",content:"质量很好，安装方便结实，非常满意", 
                price: 199.00},
            {username: "雷柏", content: "很满意，最满意的一次网购，从包装到座椅质量、材质，都很不错，颜色比想象中好看，男宝宝女宝宝用都洋气，很有高大上的感觉。", 
                price: 139.00},
            {username: "雏田", content: "宝贝已经收到了，质量挺好的，买之前也去了几家实体店，看了看没找到合适的，没想到在网上买到了这么中意的，好评。", 
                price: 84.20},
            {username: "纲手",content:"质量很好，安装方便结实，非常满意", 
                price: 199.00},
            {username: "雷柏", content: "很满意，最满意的一次网购，从包装到座椅质量、材质，都很不错，颜色比想象中好看，男宝宝女宝宝用都洋气，很有高大上的感觉。", 
                price: 139.00},
            {username: "雏田", content: "宝贝已经收到了，质量挺好的，买之前也去了几家实体店，看了看没找到合适的，没想到在网上买到了这么中意的，好评。", 
                price: 84.20},
            {username: "纲手",content:"质量很好，安装方便结实，非常满意", 
                price: 199.00},
            {username: "雷柏", content: "很满意，最满意的一次网购，从包装到座椅质量、材质，都很不错，颜色比想象中好看，男宝宝女宝宝用都洋气，很有高大上的感觉。", 
                price: 139.00},
            {username: "雏田", content: "宝贝已经收到了，质量挺好的，买之前也去了几家实体店，看了看没找到合适的，没想到在网上买到了这么中意的，好评。", 
                price: 84.20},
            {username: "纲手",content:"质量很好，安装方便结实，非常满意", 
                price: 199.00},
            {username: "雷柏", content: "很满意，最满意的一次网购，从包装到座椅质量、材质，都很不错，颜色比想象中好看，男宝宝女宝宝用都洋气，很有高大上的感觉。", 
                price: 139.00},
            {username: "雏田", content: "宝贝已经收到了，质量挺好的，买之前也去了几家实体店，看了看没找到合适的，没想到在网上买到了这么中意的，好评。", 
                price: 84.20},
        ];

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

    }
]);
