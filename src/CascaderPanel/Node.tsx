import React from 'react';
import './index.less';
import type { CascaderOptionType } from './type';

interface INodeProps {
  prefixCls?: string;
  onSelect?: (e: React.MouseEvent<HTMLElement>) => void;
  options?: CascaderOptionType;
}

function Node({
  prefixCls = 'tfe-cascader-panel',
  onSelect = () => {},
  options,
}: INodeProps) {
  const itemCls = `${prefixCls}-menu-node`;
  const itemContentCls = `${prefixCls}-menu-node-content`;
  return (
    <li
      className={itemCls}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onSelect}
    >
      <div>leftIcon</div>
      <div className={itemContentCls}>{options?.label || '??'}</div>
      <div>右侧icon</div>
    </li>
  );
}

export default Node;
