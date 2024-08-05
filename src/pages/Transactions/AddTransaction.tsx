import { useEffect, useState } from "react";
import {
  LargeText,
  MediumText,
  DatePicker,
  Option,
  Input,
  Button,
  Table,
} from "../../components";
import { ProductData } from "../../types";
import {
  formatToRupiah,
  generateTransactionNumber,
  formatNumber,
} from "../../helper";
import { addTransactionColumns } from "../../data";

const AddTransaction = () => {
  const [data, setData] = useState<ProductData[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // State for options and form inputs
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [productQty, setProductQty] = useState("");
  const [productSubtotal, setProductSubtotal] = useState("0"); // Change to string
  const [transactionDate, setTransactionDate] = useState("");
  const [transactionNumber, setTransactionNumber] = useState(1); // Start with 1

  // Options for customers and products
  const customerOptions = [
    { value: "customer1", label: "Customer 1" },
    { value: "customer2", label: "Customer 2" },
    { value: "customer3", label: "Customer 3" },
  ];

  const productOptions = [
    { value: "product1", label: "Product 1", id: 1, price: 100 },
    { value: "product2", label: "Product 2", id: 2, price: 200 },
    { value: "product3", label: "Product 3", id: 3, price: 300 },
  ];

  // Calculate subtotal whenever selectedProduct or productQty changes
  useEffect(() => {
    const selectedProductData = productOptions.find(
      (product) => product.value === selectedProduct
    );

    if (selectedProductData && productQty) {
      const subtotal = calculateSubtotal(
        selectedProductData.price,
        Number(productQty)
      );
      setProductSubtotal(formatNumber(subtotal)); // Convert subtotal to formatted string
    } else {
      setProductSubtotal("0");
    }
  }, [selectedProduct, productQty]);

  const calculateSubtotal = (productPrice: number, qty: number) => {
    return productPrice * qty;
  };

  const formatters = {
    subtotal: formatNumber, // Gunakan fungsi formatRp untuk kolom subtotal
  };

  const handleAddProduct = () => {
    const selectedProductData = productOptions.find(
      (product) => product.value === selectedProduct
    );

    if (selectedProductData) {
      const newProduct = {
        number: data.length + 1,
        name: selectedProductData.label,
        qty: productQty,
        subtotal: selectedProductData.price * Number(productQty),
      };
      const newData = [...data, newProduct];
      setData(newData);
      setTotalPrice(newData.reduce((total, item) => total + item.subtotal, 0));
      setSelectedProduct("");
      setProductQty("");
      setProductSubtotal("0"); // Reset to string
    }
  };

  const handleDelete = () => {
    alert("deleted");
  };

  const handleEdit = () => {
    alert("update");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !selectedCustomer ||
      !transactionDate ||
      data.length === 0 ||
      !customerName ||
      !customerAddress ||
      !customerPhone
    ) {
      alert("Jangan ada yang kosong ygy");
      return;
    }

    const transactionData = {
      transactionNumber: generateTransactionNumber(transactionNumber),
      transactionDate,
      selectedCustomer,
      customerName,
      customerAddress,
      customerPhone,
      products: data,
    };
    console.log(transactionData);
    setTransactionNumber((prev) => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto bg-gray-100 p-8">
      <form onSubmit={handleSubmit}>
        <LargeText
          text={"FORM TRANSAKSI"}
          className="text-3xl font-bold mt-6"
        />
        <MediumText text={"Nomor Transaksi"} className="text-sm mt-6" />
        <Input value={generateTransactionNumber(transactionNumber)} />

        <div>
          <MediumText text={"Tanggal Transaksi"} className="text-sm mt-6" />
          <DatePicker value={transactionDate} onChange={setTransactionDate} />
        </div>

        <div className="bg-slate-300 h-1 my-4">&nbsp;</div>

        <div>
          <MediumText text={"Pilih Customer"} className="text-sm" />
          <Option
            options={customerOptions}
            selectedValue={selectedCustomer}
            isCustomerOption={true}
            onChange={(value) => setSelectedCustomer(value)}
          />
        </div>

        <div>
          <MediumText text={"Data Customer"} className="text-sm mt-6" />
          <div className="flex gap-4">
            <Input
              placeholder="Nama"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <Input
              placeholder="Alamat"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
            />
            <Input
              placeholder="Phone"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-slate-300 h-1 my-4">&nbsp;</div>

        <div>
          <MediumText text={"Pilih Barang"} className="text-sm" />
          <div className="flex gap-4">
            <Option
              options={productOptions}
              selectedValue={selectedProduct}
              onChange={(value) => setSelectedProduct(value)}
            />
            <Input
              placeholder="Qty"
              value={productQty}
              onChange={(e) => setProductQty(e.target.value)}
            />
            <Input placeholder="Subtotal" value={productSubtotal} />
            <Button text="Tambah Barang" onClick={handleAddProduct} />
          </div>
        </div>

        {data.length > 0 && (
          <div>
            <MediumText text={"Data Barang"} className="text-sm mt-6" />
            <Table
              columns={addTransactionColumns}
              data={data}
              onDelete={handleDelete}
              onEdit={handleEdit}
              formatters={formatters}
            />
          </div>
        )}

        <div className="flex gap-4 items-center">
          <LargeText
            text={"Total Transaksi"}
            className="text-3xl font-bold my-6"
          />
          <LargeText
            text={formatToRupiah(totalPrice)}
            className="text-3xl font-bold my-6"
          />
        </div>

        <Button text="Simpan Transaksi" type="submit" />
      </form>
    </div>
  );
};

export default AddTransaction;
