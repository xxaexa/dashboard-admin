export interface TextProps {
  text: string | number;
  className?: string;
}

export interface ButtonProps {
  icon?: React.ReactNode;
  text?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Column {
  header: string;
  accessor: string;
}

export interface TableProps {
  columns: Column[];
  data: { [key: string]: any }[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

interface Option {
  value: string;
  label: string;
}

export interface OptionProps {
  options: Option[];
  selectedValue: string;
  isCustomerOption?: boolean;
  onChange: (value: string) => void;
}

export interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
}

export interface ProductData {
  number: number;
  name: string;
  qty: string;
  subtotal: number;
}
