---
nav:
  title: Components
  path: /components
---

## CascaderPanel

Demo:

```tsx
import React from 'react';
import { CascaderPanel } from 'toffee-ui';

const options = [
  {
    value: 'zhejiang',
    label:
      'ZhejiangZhejiangZhejiangZhejiangZhejiangZhejiangZhejiangZhejiangZhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const menuOptions = [
  {
    label: '省省省省省省省省省省省省省省省省省省省省省省省省',
  },
  {
    label: '市',
  },
  {
    label: '县',
  },
];

const loadData = (selectedOptions) => {
  const targetOption = selectedOptions[selectedOptions.length - 1];
  targetOption.loading = true;
  console.log('????--->', targetOption);
};
export default () => (
  <CascaderPanel
    style={{ height: 100 }}
    options={options}
    menuOptions={menuOptions}
    loadData={loadData}
  />
);
```
