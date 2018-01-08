import commander from 'commander';
import fs from 'fs-extra';
import path from 'path';

// #region META

/** @todo Replace with import.meta eventually */
const FILENAME = typeof __filename !== 'undefined' ? __filename : (/^ +at (?:file:\/*(?=\/)|)(.*?):\d+:\d+$/m.exec(Error().stack) || '')[1];
// const DIRNAME = typeof __dirname !== 'undefined' ? __dirname : FILENAME.replace(/[\/\\].*?$/, '');
const DIRNAME = typeof __dirname !== 'undefined' ? __dirname : FILENAME.replace(/[\/\\][^\/\\]*?$/, '');
// #endregion

// 创建目录
const changePackageJSON = (packageName) => {
  const packageJson = fs.readJsonSync(path.resolve(DIRNAME, `../../packages/${packageName}/package.json`));
  packageJson.name = `toffee-ui-${packageName}`.replace(/([A-Z])/g, '-$1').toLowerCase();
  fs.writeJsonSync(path.resolve(DIRNAME, `../../packages/${packageName}/package.json`), packageJson, { spaces: '\t' });
};
const create = (packageName) => {
  try {
    fs.copySync(path.resolve(DIRNAME, './template'), path.resolve(DIRNAME, `../../packages/${packageName}`), { overwrite: true, errorOnExist: true });
  } catch (e) {
    console.err(e);
  }
  changePackageJSON(packageName);
};

commander
  .version('0.1.0')
  .option('-c, --create [package-name]', '创建一个package')
  .parse(process.argv);

if (commander.create) {
  create(commander.create);
}
