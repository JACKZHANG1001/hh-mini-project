# First small project 
## Preface
在做这个迷你练习项目前，请提前阅读：
1. [廖雪峰的git教程](https://www.liaoxuefeng.com/wiki/896043488029600)
2. [廖雪峰的JavaScript教程（快速入门 & Node.js部分）](https://www.liaoxuefeng.com/wiki/1022910821149312)

在做这个迷你练习项目前，你应该已经掌握了：
```
git reset --hard commitID // 返回某一个commit ID
git reflog // 查看git命令记录
git checkout -- fileName // 撤销对某个文件的修改
git rm fileName // 删除某一个文件后在git里删除对应文件
git remote add origin yourGitSever // 添加远程服务器
git push -u origin master // 第一次将master上传到服务器
git push origin branchName // 将branchName分支上传到服务器
git switch -c branchName // 创建一个branchName的分支并切换到这个分支
git branch // 查看所有分支以及当前所在分支
git branch -d branchName // 删除branchName分支
git status
git log 
git merge branchName // 用FastForward模式将branchName分支合并到当前分支
git merge --no-ff branchName // 禁用FastForward模式merge
git add
git commit -m "your message"
git stash // 工作区暂存
git tag -a yourTagName -m "your message" commitID // yourTagName -> commitID 相当于对commitID设置别名
```

对.gitignore文件的修改。

基本JavaScript语法以及对Node.js的基本了解。

具体关于Node.js环境搭建的问题：
关于不同系统的配置问题请仔细阅读廖雪峰的博客并Google相关资料。
## Start
