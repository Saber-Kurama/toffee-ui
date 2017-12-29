import shadows from './utils/shadows';
// 先写 一部分  后面好好考虑
const fontSizeBase = '14px';
export default {
  // 全局 品牌 颜色
  brand: {
    primary: '#108ee9',
    primary_tap: '#0e80d2',
    accent: '#ff4081',
    danger: '#f5222d',
  },
  // 文本颜色
  text: {
    color_base: 'rgba(0, 0, 0, 0.87)',
    color_base_inverse: '#fff',
  },
  // 背景色
  fill: {
    base: '#fff',
  },
  // 圆角
  radius: {
    md: 5,
  },
  // 边框色
  border: {
    color_base: '#ddd',
  },
  // 字体排版
  typography: {

  },
  // meterial-ui color 设计
  mui: {
    primary: {},
  },
  // 间距
  spacing: {

  },
  // 阴影
  shadows,
  // 组件的一些设计
  components: {
    button: {
      height: '48px',
      color: 'red',
      fontSize: '18px',
    },
  },
};
