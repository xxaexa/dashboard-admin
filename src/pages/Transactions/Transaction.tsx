import { Link } from "react-router-dom";
import {
  LargeText,
  MediumText,
  Button,
  Input,
  DatePicker,
  Table,
  Navbar,
  MainWrap,
} from "../../components";
import AddIcon from "./../../assets/add.svg";
import FilterIcon from "./../../assets/filter.svg";
import ExcelIcon from "./../../assets/excel-file.svg";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useGetCustomersMutation } from "../../redux/api/customerApi";
import { CustomerResp } from "../../types";
import { transactioncolumns } from "../../data";
import { formatNumber } from "../../helper";

const Transaction = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [customerOption, setCustomerOption] = useState<CustomerResp[]>([]);

  const handleFilter = () => {
    console.log(startDate, endDate);
  };

  const formatters = {
    phone: formatNumber, // Misalnya, gunakan fungsi formatNumber untuk kolom telepon
  };

  const handleDelete = () => {
    toast.success("delete?");
  };

  const handleEdit = () => {
    toast.success("update?");
  };

  // Fetch customer data
  const [getCustomer, { data: customer }] = useGetCustomersMutation();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        await getCustomer().unwrap();
      } catch (err) {
        console.error("Failed to fetch customers:", err);
      }
    };

    fetchCustomers();
  }, [getCustomer]);

  useEffect(() => {
    if (customer && customer.metadata.status === 200) {
      console.log(customer.response);
      setCustomerOption(customer.response);
    } else if (customer && customer.metadata.status != 200) {
      console.error("Error fetching customers:", customer.metadata.message);
    }
  }, [customer]);

  return (
    <MainWrap style="h-screen">
      <Navbar />
      <LargeText text={"DATA CUSTOMER"} className="text-xl font-bold mt-6" />

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
            <Button icon={<AddIcon />} text="Tambah Customer" />
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
          data={customerOption}
          onDelete={handleDelete}
          onEdit={handleEdit}
          formatters={formatters}
        />
      </div>
    </MainWrap>
  );
};

export default Transaction;
