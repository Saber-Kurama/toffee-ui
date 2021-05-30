export type CascaderValueType = (string | number)[];
export interface CascaderOptionType {
  value?: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  isLeaf?: boolean;
  loading?: boolean;
  children?: Array<CascaderOptionType>;
  [key: string]: any;
}
