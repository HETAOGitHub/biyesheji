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
    .factory('DatilsFactory', function() {
        return {
            //perd:起始时间  postd:结束时间  
            //保存选择的时间
            perd: '',
            postd: ''
        }
    })
    .factory('Single', function() {
        return {
            singleSchoolData: {},
            singleTeacherData: {},
            singleStudentData: {},
            school:{},
            teacher:{},
            student:{}
        }
    })

//单个详情factory
//返回单个详情页面所有数据的服务
.factory('getDetail', ['$resource',
    function($resource) {
        return $resource(JsonApiServer, {}, {
            getSchoolDetail: {
                method: "get",
                url: JsonApiServer + 'ebook-web/statistics/QueryData/getSchoolDetail',
                isArray: true
            },
            getTeacherDetail: {
                method: "get",
                url: JsonApiServer + 'ebook-web/statistics/QueryData/getTeacherDetail',
                isArray: true
            },
            getStudentDetail: {
                method: "get",
                url: JsonApiServer + 'ebook-web/statistics/QueryData/getStudentDetail',
                isArray: true
            }

        })
    }
])

//返回单个详情应用趋势的服务
.factory('getTrend', ['$resource',
        function($resource) {
            return $resource(JsonApiServer, {}, {
                getMonthTrend: {
                    method: "get",
                    url: JsonApiServer + 'ebook-web/statistics/trend/getMonthTrend',
                    isArray: true
                },
                getTermTrend: {
                    method: "get",
                    url: JsonApiServer + 'ebook-web/statistics/trend/getTermTrend',
                    isArray: true
                },
                getYearTrend: {
                    method: "get",
                    url: JsonApiServer + 'ebook-web/statistics/trend/getYearTrend',
                    isArray: true
                }

            })
        }
    ])
    .factory('getStudentTrend', ['$resource',
        function($resource) {
            return $resource(JsonApiServer, {}, {
                getMonthTrend: {
                    method: "get",
                    url: JsonApiServer + 'ebook-web/statistics/trend/getStudentMonthTrend',
                    isArray: true
                },
                getTermTrend: {
                    method: "get",
                    url: JsonApiServer + 'ebook-web/statistics/trend/getStudentTermTrend',
                    isArray: true
                },
                getYearTrend: {
                    method: "get",
                    url: JsonApiServer + 'ebook-web/statistics/trend/getStudentYearTrend',
                    isArray: true
                }
            })
        }
    ])

//返回单个详情应用分析排名的服务
.factory('getRankRate', ['$resource',
    function($resource) {
        return $resource(JsonApiServer, {}, {
            getSchoolRankRate: {
                method: "get",
                url: JsonApiServer + 'ebook-web/statistics/QueryData/getSchoolRankRate',
                isArray: true
            },
            getTeacherRankRate: {
                method: "get",
                url: JsonApiServer + 'ebook-web/statistics/QueryData/getTeacherRankRate',
                isArray: true
            },
            getStudentRankRate: {
                method: "get",
                url: JsonApiServer + 'ebook-web/statistics/QueryData/getStudentRankRate',
                isArray: true
            }
        })
    }
])

//返回单个详情应用分布的服务
.factory('getYyfb', ['$resource',
    function($resource) {
        return $resource(JsonApiServer, {}, {
            getSchoolYyfb: {
                method: "get",
                url: JsonApiServer + 'ebook-web/statistics/QueryData/getSchoolYyfb',
                isArray: true
            },
            getTeacherYyfb: {
                method: "get",
                url: JsonApiServer + 'ebook-web/statistics/QueryData/getTeacherYyfb',
                isArray: true
            },
            getStudentYyfb: {
                method: "get",
                url: JsonApiServer + 'ebook-web/statistics/QueryData/getStudentYyfb',
                isArray: true
            }

        })
    }
])

