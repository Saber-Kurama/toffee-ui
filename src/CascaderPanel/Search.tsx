import * as React from 'react';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import { Input } from 'antd';

export interface TransferSearchProps {
  prefixCls?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear?: (e: React.MouseEvent<HTMLElement>) => void;
  value?: string;
  disabled?: boolean;
}

export default function Search(props: TransferSearchProps) {
  const {
    placeholder = '',
    value,
    prefixCls,
    disabled,
    onChange,
    handleClear,
  } = props;

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    },
    [onChange],
  );

  const handleClearFn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!disabled && handleClear) {
      handleClear(e);
    }
  };

  return (
    <div style={{ position: 'relative', marginBottom: 4 }}>
      <Input
        placeholder={placeholder}
        className={prefixCls}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      {value && value.length > 0 ? (
        <a className={`${prefixCls}-action`} onClick={handleClearFn}>
          <CloseCircleFilled />
        </a>
      ) : (
        <span className={`${prefixCls}-action`}>
          <SearchOutlined />
        </span>
      )}
    </div>
  );
}
