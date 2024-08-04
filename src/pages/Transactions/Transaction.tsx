import { Link } from "react-router-dom"
import { 
  LargeText, 
  MediumText,
  Button,
  Input,
  DatePicker,
  Table 
  } from "../../components"
import AddIcon from './../../assets/add.svg'
import FilterIcon from './../../assets/filter.svg'
import ExcelIcon from './../../assets/excel-file.svg'
import { Column } from "../../types"

const Transaction = () => {
  const columns: Column[] = [
    { header: 'No', accessor: 'number' },
    { header: 'Nomor Transaksi', accessor: 'tranNumber' },
    { header: 'Customer', accessor: 'customer' },
    { header: 'Total', accessor: 'total' },
  ];

  const data = [
    {number:'1', tranNumber:'S0/2024-04/0001' ,customer: 'John Doe', total: 280000 },
  ];

  return (
    <div className="max-w-7xl mx-auto bg-gray-100">
      <LargeText text={"TRANSAKSI PENJUALAN"} className="text-xl font-bold mt-6"/>

      {/* filter */}
      <MediumText text={"Filter Tanggal Transaksi"} className="text-lg font-bold mt-6"/>
      <div className="flex justify-between">

        <div>
          <div className="flex items-center gap-4">
            <DatePicker/>
            <MediumText text={"sd"} className="text-sm"/>
            <DatePicker/>
           <Button icon={<FilterIcon/>}/>
          </div>
        </div>

        <div>
          <Link to={"add"}>
            <Button icon={<AddIcon/>} text="Tambah Transaksi"/>
          </Link>
        </div>

      </div>
      

      {/*  */}
      <div className="flex justify-between mt-4">
        <Input placeholder="Search"/>
        <Button icon={<ExcelIcon/>} text="Export Excel"/>
      </div>

      {/* table */}
      <div className="mt-3">
      <Table columns={columns} data={data} />


      </div>
    </div>
  )
}

export default Transaction