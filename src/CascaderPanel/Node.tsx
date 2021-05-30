import React from 'react';
import RightOutlined from '@ant-design/icons/RightOutlined';
import RedoOutlined from '@ant-design/icons/RedoOutlined';
import './index.less';
import type { CascaderOptionType } from './type';

interface INodeProps {
  prefixCls?: string;
  className?: string;
  isActive?: boolean;
  onSelect?: (e: React.MouseEvent<HTMLElement>) => void;
  options?: CascaderOptionType;
}

function Node({
  prefixCls = 'tfe-cascader-panel',
  className = '',
  isActive = false,
  onSelect = () => {},
  options,
}: INodeProps) {
  let nodeCls = `${prefixCls}-menu-node`;
  const nodeContentCls = `${prefixCls}-menu-node-content`;
  let expandIconNode = null;
  const hasChildren = options?.['children'] && options?.['children'].length > 0;
  const expandIcon = <RightOutlined />;
  const loadingIcon = (
    <span className={`${prefixCls}-menu-node-loading-icon`}>
      <RedoOutlined spin />
    </span>
  );
  if (hasChildren || options?.isLeaf === false) {
    nodeCls += ` ${prefixCls}-menu-node-expand`;
    if (!options?.loading) {
      expandIconNode = (
        <span className={`${prefixCls}-menu-node-expand-icon`}>
          {expandIcon}
        </span>
      );
    }
  }
  if (isActive) {
    nodeCls += ` ${prefixCls}-menu-node-active`;
  }
  console.log('options--Node', options);
  let loadingIconNode = null;
  if (options?.loading) {
    nodeCls += ` ${prefixCls}-menu-node-loading`;
    loadingIconNode = loadingIcon || null;
  }
  return (
    <li
      className={`${nodeCls} ${className}`}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onSelect}
    >
      {/* <div>leftIcon</div> */}
      <div className={nodeContentCls}>{options?.label || ''}</div>
      {expandIconNode}
      {loadingIconNode}
    </li>
  );
}

export default Node;
