import React from 'react';
import Node from './Node';
import Search from './Search';
import type { CascaderOptionType } from './type';

interface IMenuProps {
  prefixCls?: string;
  /** index */
  menuIndex?: number;
  options?: CascaderOptionType[];
  onSelect?: (
    targetOption: CascaderOptionType,
    e: React.MouseEvent<HTMLElement>,
  ) => void;
}
function Menu({ prefixCls, options = [], menuIndex, onSelect }: IMenuProps) {
  const ulCls = `${prefixCls}-menu`;
  return (
    <>
      <div className={ulCls}>
        <div></div>
        <Search prefixCls={`${ulCls}-search`} />
        <ul>
          {options.map((option, index) => {
            console.log('option?', option);
            return (
              <Node
                key={`${option.value}_index`}
                options={option}
                onSelect={(e) => {
                  onSelect?.(option, e);
                }}
              ></Node>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Menu;
