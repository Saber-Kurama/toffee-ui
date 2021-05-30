import React, { useCallback, useEffect, useState } from 'react';
import Node from './Node';
import Search from './Search';
import type { CascaderOptionType, CascaderValueType } from './type';

interface IMenuProps {
  prefixCls?: string;
  /** index */
  menuIndex?: number;
  options?: CascaderOptionType[];
  activeValue?: CascaderValueType;
  onSelect?: (
    targetOption: CascaderOptionType,
    e: React.MouseEvent<HTMLElement>,
  ) => void;
}
function Menu({
  prefixCls,
  options = [],
  activeValue,
  menuIndex = 0,
  onSelect,
}: IMenuProps) {
  const ulCls = `${prefixCls}-menu`;

  const isActiveOption = useCallback(
    (option: CascaderOptionType, menuIndex: number): boolean => {
      console.log('activeValue--', activeValue);
      return activeValue?.[menuIndex] === option?.value || false;
    },
    [activeValue],
  );

  const [searchValue, setSearchValue] = useState('');
  const [showNodes, setShowNodes] = useState<CascaderOptionType[]>([]);
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { handleFilter } = this.props;
    const {
      target: { value: filterValue },
    } = e;
    setSearchValue(filterValue);
    // this.setState({ filterValue });
    // handleFilter(e);
  };

  const handleClear = () => {
    setSearchValue('');
    // const { handleClear } = this.props;
    // handleClear();
  };
  useEffect(() => {
    if (searchValue.length > 0) {
      setShowNodes(
        options.filter((option) => {
          return `${option?.value || ''}`?.indexOf(searchValue) >= 0;
        }),
      );
    } else {
      setShowNodes(options);
    }
  }, [options, searchValue]);
  return (
    <>
      <div className={ulCls}>
        <div></div>
        <Search
          prefixCls={`${ulCls}-search`}
          value={searchValue}
          onChange={handleFilter}
          handleClear={handleClear}
        />
        <ul className={`${prefixCls}-menu-ul`}>
          {showNodes.map((option, index) => {
            console.log('option?', option);
            const isActive = isActiveOption(option, menuIndex);
            return (
              <Node
                key={`${option.value}_index`}
                isActive={isActive}
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
