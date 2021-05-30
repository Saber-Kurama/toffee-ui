import React from 'react';
import RightOutlined from '@ant-design/icons/RightOutlined';
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
  let nodeCls = `${prefixCls}-menu-node`;
  const nodeContentCls = `${prefixCls}-menu-node-content`;
  let expandIconNode = null;
  const hasChildren = options?.['children'] && options?.['children'].length > 0;
  const expandIcon = <RightOutlined />;
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
  let loadingIconNode = null;
  return (
    <li
      className={nodeCls}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onSelect}
    >
      {/* <div>leftIcon</div> */}
      <div className={nodeContentCls}>{options?.label || ''}</div>
      {expandIconNode}
    </li>
  );
}

export default Node;
