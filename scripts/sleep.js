// 等待指定秒数后退出，用于开发脚本中等待 webpack 首次编译完成
const seconds = parseInt(process.argv[2]) || 10;
console.log(`[sleep] waiting ${seconds}s for webpack initial build...`);
setTimeout(() => process.exit(0), seconds * 1000);
