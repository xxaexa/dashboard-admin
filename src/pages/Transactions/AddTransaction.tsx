import { useEffect, useState } from "react";
import {
  LargeText,
  MediumText,
  DatePicker,
  Option,
  Input,
  Button,
  Table,
  MainWrap,
  Navbar,
} from "../../components";
import { ProductData } from "../../types";
import {
  formatToRupiah,
  generateTransactionNumber,
  formatNumber,
} from "../../helper";
import { addTransactionColumns } from "../../data";
import { toast } from "react-toastify";
import { useGetProductsMutation } from "../../redux/api/productApi";
import { useGetCustomersMutation } from "../../redux/api/customerApi";
import { ProductResp, CustomerResp, CustomerApi } from "../../types";
import { productPrice } from "../../data";

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
  const [productSubtotal, setProductSubtotal] = useState("0");
  const [transactionDate, setTransactionDate] = useState("");
  const [transactionNumber, setTransactionNumber] = useState(1);

  // get customer
  const [getCustomer, { data: customer }] = useGetCustomersMutation();
  const [customerOption, setCustomerOption] = useState<CustomerResp[]>([]);

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
      setCustomerOption(customer.response);
    } else if (customer && customer.metadata.status != 200) {
      console.error("Error fetching customers:", customer.metadata.message);
    }
  }, [customer]);

  // get product
  const [getProduct, { data: product, isLoading }] = useGetProductsMutation();
  const [productOptions, setProductOptions] = useState<ProductResp[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await getProduct().unwrap();
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, [getProduct]);

  useEffect(() => {
    if (product && product.metadata.status === 200) {
      const productsWithPrice = product.response.map((p, index) => ({
        ...p,
        price: productPrice[index % productPrice.length],
      }));
      setProductOptions(productsWithPrice);
    } else if (product && product.metadata.status !== 200) {
      console.error("Error fetching products:", product.metadata.message);
    }
  }, [product]);

  useEffect(() => {
    const selectedProductData = productOptions.find(
      (product) => product.kd_barang === selectedProduct
    );

    if (selectedProductData && productQty) {
      const subtotal = calculateSubtotal(
        selectedProductData.price,
        Number(productQty)
      );
      setProductSubtotal(formatNumber(subtotal));
    } else {
      setProductSubtotal("0");
    }
  }, [selectedProduct, productQty]);

  const calculateSubtotal = (productPrice: number, qty: number) => {
    return productPrice * qty;
  };

  const formatters = {
    subtotal: formatNumber,
  };

  const handleAddProduct = () => {
    const selectedProductData = productOptions?.find(
      (product: any) => product.kd_barang === selectedProduct
    );

    if (selectedProductData) {
      const newProduct = {
        number: data.length + 1,
        name: selectedProductData.nama_barang,
        qty: productQty,
        subtotal: selectedProductData.price * Number(productQty),
      };
      const newData = [...data, newProduct];
      setData(newData);
      setTotalPrice(newData.reduce((total, item) => total + item.subtotal, 0));
      setSelectedProduct("");
      setProductQty("");
      setProductSubtotal("0");
    }
  };

  const handleDelete = () => {
    toast.success("Hapus berhasil?");
  };

  const handleEdit = () => {
    toast.success("Edit berhasil?");
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
      toast.info("Jangan ada yang kosong ygy");
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
    toast.success("Berhasil cek console");
    console.log(transactionData);
    setTransactionNumber((prev) => prev + 1);
  };

  return (
    <MainWrap style="h-screen">
      <Navbar />
      <div className="bg-slate-300 h-1 my-4">&nbsp;</div>

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
            options={customerOption.map((c) => ({
              value: c.id,
              label: c.nama,
            }))}
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
            {isLoading ? (
              <p>Loading</p>
            ) : (
              <Option
                options={productOptions.map((p) => ({
                  value: p.kd_barang,
                  label: p.nama_barang,
                  price: p.price,
                }))}
                selectedValue={selectedProduct}
                onChange={(value) => setSelectedProduct(value)}
              />
            )}
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
    </MainWrap>
  );
};

export default AddTransaction;
