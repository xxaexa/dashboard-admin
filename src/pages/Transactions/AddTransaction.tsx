import { LargeText, 
  MediumText, 
  DatePicker, 
  Option, 
  Input, 
  Button,
  Table
} from "../../components"
import { Column } from "../../types"

const AddTransaction = () => {
  const columns: Column[] = [
    { header: 'No', accessor: 'number' },
    { header: 'Nama Barang', accessor: 'name' },
    { header: 'Qty', accessor: 'qty' },
    { header: 'Subtotal', accessor: 'subtotal' },
  ];

  const data = [
    {number:'1', name:'Product One', qty: '1', subtotal: 300.000 },
  ];

  return (
    <div className="max-w-7xl mx-auto bg-gray-100">
      <LargeText text={"FORM TRANSAKSI"} className="text-3xl font-bold mt-6"/>
      <MediumText text={"Nomor Transaksi"} className="text-sm mt-6"/>

      <div>
        <MediumText text={"Tanggal Transaksi"} className="text-sm mt-6"/>
        <DatePicker/>
      </div>

      <div className="bg-slate-300 h-1 my-4">
        &nbsp;
      </div>

      <div>
        <MediumText text={"Pilih Customer"} className="text-sm"/>
        <Option/>
      </div>

      <div>
        <MediumText text={"Data Customer"} className="text-sm mt-6"/>
        <div className="flex gap-4">
          <Input placeholder="Nama"/>
          <Input placeholder="Alamat"/>
          <Input placeholder="Phone"/>
       </div>
      </div>

      <div className="bg-slate-300 h-1 my-4">
        &nbsp;
      </div>

      <div>
        <MediumText text={"Pilih Barang"} className="text-sm "/>
        <div className="flex gap-4">
          <Option/>
          <Input placeholder="Qty"/>
          <Input placeholder="Subtotal"/>
          <Button text="Tambah Barang"/>
        </div>
      </div>

      <div>
        <MediumText text={"Data Barang"} className="text-sm mt-6"/>
        <Table columns={columns} data={data} />
      </div>

      <LargeText text={"Total Transaksi"} className="text-3xl font-bold my-6"/>
      <Button text="Simpan Transaksi"/>
    </div>
  )
}

export default AddTransaction