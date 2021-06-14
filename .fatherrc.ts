// import tailwindcss from 'tailwindcss';

const options = {
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: false,
      },
    ],
  ],
  extraPostCSSPlugins: [
    // tailwindcss({}),
    require('tailwindcss')({}),
    require('autoprefixer'),
  ],
  // cssModules: true,
  extractCSS: true,
  lessInBabelMode: true,
  runtimeHelpers: true,
  esm: 'babel',
  cjs: 'babel',
  autoprefixer: {
    browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 11'],
  },
};

export default options;
