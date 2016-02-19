//首页factory
app.factory('Home', ['$resource',
    function($resource) {
        return $resource(JsonApiServer, {}, {
            getInitData: {
                method: "get",
                url: JsonApiServer + "ebook-web/statistics/QueryData/getDistrictDetail",
                isArray: true
            },
            getMonthData: {
                method: "get",
                url: JsonApiServer + "ebook-web/statistics/trend/getMonthTrend",
                isArray: true
            },
            getYearData: {
                method: "get",
                url: JsonApiServer + "ebook-web/statistics/trend/getYearTrend",
                isArray: true
            },
            getTermData: {
                method: "get",
                url: JsonApiServer + "ebook-web/statistics/trend/getTermTrend",
                isArray: true
            }
        })
    }
])
//全区概况factory
.factory('areaData', ['$resource',
    function($resource) {
        return $resource(JsonApiServer, {}, {
            getAreaSchoolData: {
                method: "get",
                url: JsonApiServer + "ebook-web/statistics/survey/getDistrictSchoolSurvey",
                isArray: true
            },
            getAreaUserData: {
                method: "get",
                url: JsonApiServer + "ebook-web/statistics/survey/getDistrictUserSurvey",
                isArray: true
            }
        })
    }
])
.factory('User', ['$resource',
    function($resource) {
        return $resource(JsonApiServer, {}, {
            getUser: {
                method: "get",
                url: JsonApiServer + "ebook-web/users/current"
            }
        })
    }
])
//排名factory
.factory('RankData', ['$resource',
    function($resource) {
        return $resource(JsonApiServer, {}, {
            getSchoolRank: {
                method: "get",
                url: JsonApiServer + 'ebook-web/statistics/QueryData/getSchoolRank'
            },
            getTeacherRank: {
                method: "get",
                url: JsonApiServer + 'ebook-web/statistics/QueryData/getTeacherRank'
            },
            getStudentRank: {
                method: "get",
                url: JsonApiServer + 'ebook-web/statistics/QueryData/getStudentRank'
            },
            getAllSchools: {
                method: "get",
                url: JsonApiServer + "ebook-web/statistics/QueryData/getSchoolName",
                isArray: true
            } //获取学校名字和ID
        })
    }
])

//总详情factory
.factory('details', ['$resource',

        function($resource) {
            return $resource(JsonApiServer, {}, {
                getSchools: {
                    method: "get",
                    url: JsonApiServer + "ebook-web/statistics/QueryData/getSchoolData"
                }, //获取学校详情信息
                getTeachers: {
                    method: "get",
                    url: JsonApiServer + "ebook-web/statistics/QueryData/getTeacherData"
                }, //获取教师详情信息
                getStudents: {
                    method: "get",
                    url: JsonApiServer + "ebook-web/statistics/QueryData/getStudentData"
                }, //获取学生详情信息
                getOneSchool: {
                    method: "get",
                    isArray:true,
                    url: JsonApiServer + "ebook-web/statistics/QueryData/getOneSchoolData"
                }, //获取单个学校表格信息
                getOneTeacher: {
                    method: "get",
                    isArray:true,
                    url: JsonApiServer + "ebook-web/statistics/QueryData/getOneTeacherData"
                }, //获取单个教师表格信息
                getOneStudent: {
                    method: "get",
                    isArray:true,
                    url: JsonApiServer + "ebook-web/statistics/QueryData/getOneStudentData"
                }, //获取单个学生表格信息
                getAllSchools: {
                    method: "get",
                    url: JsonApiServer + "ebook-web/statistics/QueryData/getSchoolName",
                    isArray: true
                } //获取学校名字和ID
            })
        }
    ])
.factory('initData',function(){
    return{
        sales:[ 
            {ShippingAddress: "深圳",address: "广东省番禺区外环东路",count: 3,img: "/assets/5.png",
                name: "儿童座椅",price: 300,saleId: "002",salePrice: 700,tranMode: "邮政运输"}
           ],
        imgdata1:[
            {id:'001',name:"方向盘",count:1,price:300,address:'广东省番禺区外环东路',salePrice:60,img:"/assets/4.png",descripts:"商品描述",Saledate:'2016-2-1',Salecount:50,lbId:'0001'},
            {id:'002',name:"儿童座椅",count:1,price:300,address:'广东省番禺区外环东路',salePrice:700,img:"/assets/5.png",descripts:"商品描述"},
            {id:'003',name:"汽车发电机",count:1,price:300,address:'广东省番禺区外环东路',salePrice:600,img:"/assets/6.png",descripts:"商品描述"},
            {id:'004',name:"机油滤清器",count:1,price:300,address:'广东省番禺区外环东路',salePrice:500,img:"/assets/7.png",descripts:"商品描述"},
            {id:'005',name:"高性能发动机油",count:1,price:300,address:'广东省番禺区外环东路',salePrice:200,img:"/assets/8.png",descripts:"商品描述"},
            {id:'006',name:"火花塞",count:1,price:300,address:'广东省番禺区外环东路',salePrice:100,img:"/assets/9.png",descripts:"商品描述"},
            {id:'007',name:"车用空气清新剂",count:1,price:300,address:'广东省番禺区外环东路',salePrice:150,img:"/assets/10.png",descripts:"商品描述"},
            {id:'008',name:"智能安全防盗器",count:1,price:300,address:'广东省番禺区外环东路',salePrice:320,img:"/assets/11.png",descripts:"商品描述"}
            ],
        imgdata2:[
            {img:"/assets/1.jpg",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."},
            {img:"/assets/2.jpg",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."},
            {img:"/assets/3.jpg",descripts:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."}
        ],
        orderdatas:[{Id:001,Orderid:0663987123456,
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
                tag:"1",Price:"200",Time:"2015/5/22 9:38:29"}
            ],
        evaluatedata:[
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
            ],
        parameterdata:[
                {brand:"品牌",brandValue:"宝马系类"},
                {brand:"类别",brandValue:"安全椅"},
                {brand:"表层材质",brandValue:"真皮"},
                {brand:"上架时间",brandValue:"2015/5/22 9:38:29"}
            ],
        saleDetail:{

        }
    }        
})