// component

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

export interface InputUsernameProps {
  id: string;
  style?: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputPasswordProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MainWrapProps {
  children: React.ReactNode;
  style?: string;
}

// redux
interface Metadata {
  status: number;
  message: string;
}

export interface CustomerReq {
  id: string;
  nama: string;
  alamat: string;
  phone: string;
}

export interface CustomerResp {
  id: string;
  nama: string;
  alamat: string;
  phone: string;
}

export interface CustomerApi {
  response: CustomerResp[];
  metadata: Metadata;
}

export interface ProductResp {
  kd_barang: string;
  nama_barang: string;
  price: number;
}

export interface ProductApi {
  response: ProductResp[];
  metadata: Metadata;
}

export interface TransactionResp {
  id: string;
  id_customer: string;
  nomor_transaksi: string;
  tanggal_transaksi: string;
  total_transaksi: string;
}

export interface TransactionReq {
  id: string;
  id_customer: string;
  nomor_transaksi: string;
  tanggal_transaksi: string;
  total_transaksi: string;
}

interface AuthResponse {
  uid: string;
  token: string;
}

export interface UserResp {
  response: AuthResponse;
  metadata: Metadata;
}

export interface GenericResponse {
  response: AuthResponse;
  metadata: Metadata;
}

export interface UserReq {
  username: string;
  password: string;
}
