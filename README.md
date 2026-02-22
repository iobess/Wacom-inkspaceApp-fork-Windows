# Wacom Inkspace App for Windows
--2.7.3



### 基于Wacom InkspaceApp反编译项目构建的Windows Wacom Inkspace App应用
#### 原始仓库参阅：https://github.com/elliotberry/wacom-inkspace.git


### ✨ 改进项：

> [!IMPORTANT]

>
> 1. 🖼️ **增加：全部导出功能**（SVG, PSD, PNG, JPEG）
> 2. 🌙 **深色模式支持**（可从 `设置 -> 支持选项` 中打开/关闭）
> 3. 🔌 **现在可随时切换 USB / BT 连接方式**



#### 目的

Wacom正在停止对此应用的支持，但仍有大量设备依赖Wacom InkspaceApp（例如影拓Pro的Paper Edition功能），感谢原仓库社区的贡献。我的开发依赖AI完成，但仅限于少量的功能和UI层级的解决。对于Windows平台的Wacom用户已经达到理想的可用程度。


#### 注意事项

##### 关于 Paper Edition(Paper Mode)
Wacom Inkspace App应用可在USB/BT获取到支持paper mode 设备中的笔记数据并下载然后从设备中 **⚠️ 删除** 这些笔记数据。
###### 手动备份路径: `%AppData%\Wacom Inkspace App`

##### 稳定性说明
由于我没有在代码层进行审阅排查，我不确定其可靠性和稳定性。
如果您遇到未知错误，则意味着此版本不适用于您的设备系统环境或工作流程。




### 开发

目前依赖大量旧版本技术栈，因此在安装环境过程中避免npm install，而是推荐直接指定版本。
src有原代码仓库贡献值预编译的Mac相关二进制包依赖，可以尝试在Mac构建。
我额外还预编译几个核心模块的Windows二进制文件包含在此仓库中。


#### 以下是原仓库作者的README.md

Since Wacom's support of this product appears to be waning, it would be nice to keep something alive. Kept node_modules since there's some necessary stuff in there.

## Installation

Make sure you've got webpack and friends.
`npm install -g webpack webpack-cli cross-env electron Concurrently`
`npm install --save-dev webpack`

## dev
I've created a new dev script called `devel`, since the original dev task references an application script I couldn't get from decompilation. So just run `npm run devel` to run electron/webpack in development mode. Other builds are documented in `package.json`.

## See Also
`readme-original.md`, the original repository's readme.
Windows 11 的二进制核心模块 node 文件在其对应的 build 文件夹内，例如 USB：`node_modules\usb\build\Release`

