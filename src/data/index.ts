import { Column } from "../types";

export const transactioncolumns: Column[] = [
  { header: "No", accessor: "number" },
  { header: "Nomor Transaksi", accessor: "tranNumber" },
  { header: "Customer", accessor: "customer" },
  { header: "Total", accessor: "total" },
];

export const transactionData = [
  {
    id: "1",
    number: "1",
    tranNumber: "S0/2024-04/0001",
    customer: "John Doe",
    total: 280000,
  },
  {
    id: "2",
    number: "2",
    tranNumber: "S0/2024-05/0002",
    customer: "Rama Sinta",
    total: 320000,
  },
];

export const addTransactionColumns: Column[] = [
  { header: "No", accessor: "number" },
  { header: "Nama Barang", accessor: "name" },
  { header: "Qty", accessor: "qty" },
  { header: "Subtotal", accessor: "subtotal" },
];
