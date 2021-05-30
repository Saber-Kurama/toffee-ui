import React, { useCallback, useState } from 'react';
// import arrayTreeFilter from 'array-tree-filter';
import Menu from './Menu';
import './index.less';
import type { CascaderOptionType, CascaderValueType } from './type';

function arrayTreeFilter<T>(
  data: T[],
  filterFn: (item: T, level: number) => boolean,
  options?: {
    childrenKeyName?: string;
  },
) {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  var children = data || [];
  var result: T[] = [];
  var level = 0;
  console.log('children', children);
  do {
    var foundItem: T = children.filter(function (item) {
      return filterFn(item, level);
    })[0];
    if (!foundItem) {
      break;
    }
    result.push(foundItem);
    children = (foundItem as any)[options.childrenKeyName] || [];
    level += 1;
  } while (children.length > 0);
  return result;
}

interface ICascaderPanelProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /** 可选项数据源 */
  options: CascaderOptionType[];
  /** 指定选中项 */
  value?: CascaderValueType;
  /** 默认的选中项 */
  defaultValue?: CascaderValueType;
  /** menuOptions */
  menuOptions?: any[];
  onChange?: (
    value: CascaderValueType,
    selectOptions: CascaderOptionType[],
  ) => void;
  loadData?: (selectOptions: CascaderOptionType[]) => void;
}
function CascaderPanel({
  prefixCls = 'tfe-cascader-panel',
  className = '',
  style = {},
  options = [],
  menuOptions = [],
  value,
  defaultValue = [],
  onChange,
  loadData,
}: ICascaderPanelProps) {
  console.log('loadData', options);
  // 选中的值 (string[]) value的值组成的
  const [activeValue, setActiveValue] = useState(value || defaultValue || []);
  console.log(
    'arrayTreeFilter---',
    arrayTreeFilter(options, (i) => true),
  );
  // 获取选中节点后面的children
  const getActiveOptions = (
    activeValue: CascaderValueType,
    options: CascaderOptionType[],
  ) => {
    return arrayTreeFilter(
      options || [],
      (o, level) => o['value'] === activeValue[level],
    );
  };

  const getShowOptions = () => {
    return arrayTreeFilter(options, (i) => true);
  };
  const getOption = useCallback(
    (menuIndex: number) => {
      if (menuIndex === 0) {
        return options;
      }
      const activeOptions = getActiveOptions(activeValue, options);
      return activeOptions[menuIndex - 1]?.children || [];
      // return [];
    },
    [activeValue, options],
  );
  // 每一个节点的点击
  const handleMenuSelect = useCallback(
    (targetOption: CascaderOptionType, menuIndex: number) => {
      const newActiveValue = activeValue.slice(0, menuIndex + 1);
      newActiveValue[menuIndex] = targetOption?.value || '';
      setActiveValue(newActiveValue);
      const activeOptions = getActiveOptions(newActiveValue, options);
      handleChange(activeOptions);
      if (!targetOption.children && loadData) {
        loadData(activeOptions);
        return;
      }
    },
    [activeValue, options],
  );

  const handleChange = (activeOptions: CascaderOptionType[] = []) => {
    onChange?.(
      activeOptions.map((option) => option?.value || ''),
      activeOptions,
    );
  };

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      {/* <div>头部</div> */}
      <div className={`${prefixCls}-menu-wrap`}>
        {menuOptions.map((menuOption, index) => {
          const optionsData = getOption(index);
          console.log('optionsData', optionsData);
          return (
            <Menu
              key={index}
              prefixCls={prefixCls}
              options={optionsData}
              activeValue={activeValue}
              menuOptions={menuOption}
              menuIndex={index}
              onSelect={(targetOption, e) => {
                handleMenuSelect(targetOption, index);
              }}
            ></Menu>
          );
        })}
      </div>
      {/* <div>尾部</div> */}
    </div>
  );
}

export default CascaderPanel;
