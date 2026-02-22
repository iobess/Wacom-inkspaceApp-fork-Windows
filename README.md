# Wacom Inkspace App 
--2.7.3
Now buildable!!

Since Wacom's support of this product appears to be waning, it would be nice to keep something alive. Kept node_modules since there's some necessary stuff in there.

## Installation

Make sure you've got webpack and friends.
`npm install -g webpack webpack-cli cross-env electron Concurrently`
`npm install --save-dev webpack`

## dev
I've created a new dev script called `devel`, since the original dev task references an application script I couldn't get from decompilation. So just run `npm run devel` to run electron/webpack in development mode. Other builds are documented in `package.json`.

## See Also
`readme-original.md`, the original repository's readme.
windows11的二进制核心模块node文件在其对应的build文件夹内，例如USB："C:\Users\Pytho\Pictures\wacom-inkspace\node_modules\usb\build\Release"

## 警告！！！
禁止一切会产生npm install行为的安装/更新等类似操作。一旦npm install，项目将完全覆灭死亡。