查询统计
=====================
# 架构包含内容
> angular.js
> angular bootstrap http://angular-ui.github.io/bootstrap/
> bootstrap 3  http://v3.bootcss.com/
> fontawesome 字体图标  http://fortawesome.github.io/Font-Awesome/
> highchart图表库 与 ng-highchart   http://www.hcharts.cn/
> smart-table表格  http://lorenzofox3.github.io/smart-table-website/

# 工具运行
> gulp 打包 css js自动注入
> browser-sync 自动刷新
> deployd 前端后台数据接口

# 运行方式
> 下载代码
> npm install
> gulp
> 会启动在3000端口，如果启动多个，端口递增

# 发布运行
> gulp server
> 会启动在3000端口  打包和压缩 后续增加

=================================
以下任务待完成
## css min任务
=====================
> 会将css文件夹中的文件合并压缩到dist文件夹中

```bash
$ gulp mincss
```
## js min任务
=====================
> 会将js文件夹中的文件合并压缩到dist文件夹中

```bash
$ gulp minjs
```

## js check任务
=====================
> 检查js文件夹中的文件

```bash
$ gulp jscheck
```
