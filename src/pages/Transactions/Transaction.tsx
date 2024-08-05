import { Link } from "react-router-dom";
import {
  LargeText,
  MediumText,
  Button,
  Input,
  DatePicker,
  Table,
} from "../../components";
import AddIcon from "./../../assets/add.svg";
import FilterIcon from "./../../assets/filter.svg";
import ExcelIcon from "./../../assets/excel-file.svg";
import { transactionData, transactioncolumns } from "../../data";
import { useState } from "react";
import { formatNumber } from "../../helper";

const Transaction = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    console.log(startDate, endDate);
  };

  const formatters = {
    total: formatNumber, // Gunakan fungsi formatRp untuk kolom total
  };

  const handleDelete = () => {
    alert("deleted");
  };

  const handleEdit = () => {
    alert("update");
  };

  return (
    <div className="max-w-7xl mx-auto bg-gray-100">
      <LargeText
        text={"TRANSAKSI PENJUALAN"}
        className="text-xl font-bold mt-6"
      />

      {/* filter */}
      <MediumText
        text={"Filter Tanggal Transaksi"}
        className="text-lg font-bold mt-6"
      />
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-4">
            <DatePicker value={startDate} onChange={setStartDate} />
            <MediumText text={"sd"} className="text-sm" />
            <DatePicker value={endDate} onChange={setEndDate} />
            <Button icon={<FilterIcon />} />
          </div>
        </div>

        <div>
          <Link to={"add"}>
            <Button icon={<AddIcon />} text="Tambah Transaksi" />
          </Link>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-between mt-4">
        <Input placeholder="Search" />
        <Button icon={<ExcelIcon />} text="Export Excel" />
      </div>

      {/* table */}
      <div className="mt-3">
        <Table
          columns={transactioncolumns}
          data={transactionData}
          onDelete={handleDelete}
          onEdit={handleEdit}
          formatters={formatters}
        />
      </div>
    </div>
  );
};

export default Transaction;
