export default function setThemeValue(value, defaultValue, str) {
  const strArr = str.split('.');
  const value1 = strArr.reduce((v, currentValue) => {
    if (!v) {
      return v;
    }
    return v[currentValue];
  }, value);
  const value2 = strArr.reduce((v, currentValue) => {
    if (!v) {
      return v;
    }
    return v[currentValue];
  }, defaultValue);

  return value1 || value2;
}
