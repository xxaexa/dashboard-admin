import { Column } from "../types";

export const transactioncolumns: Column[] = [
  { header: "No", accessor: "nip" },
  { header: "Nomor Transaksi", accessor: "nip" },
  { header: "Customer", accessor: "nama" },
  { header: "Total", accessor: "alamat" },
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

export const productPrice = [10000, 20000, 30000];
