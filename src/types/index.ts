import { ReactNode } from "react";

export interface TextProps {
  text: string;
  className?: string;
}

export interface ButtonProps {
  icon?:ReactNode;
  text?: string;
}

export interface InputProps {
  placeholder :string;
}

export interface Column {
  header: string;
  accessor: string;
}

export interface TableProps {
  columns: Column[];
  data: { [key: string]: any }[];
}