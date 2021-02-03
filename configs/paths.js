/* eslint-disable */
const fs = require('fs');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath); // 절대 경로

module.exports = {
    appPath: resolveApp('.'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    appNodeModules: resolveApp('node_modules'),
    dist: resolveApp('dist'),
    build: resolveApp('build'),
};
