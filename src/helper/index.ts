export const formatToRupiah = (amount: number): string => {
  const numberString = amount.toString().replace(/,/g, "");

  const [integerPart, decimalPart] = numberString.split(".");

  const formattedIntegerPart = integerPart
    .split("")
    .reverse()
    .reduce((acc, char, index) => {
      return char + (index && index % 3 === 0 ? "." : "") + acc;
    }, "");

  const formattedNumber = decimalPart
    ? `${formattedIntegerPart},${decimalPart}`
    : formattedIntegerPart;

  return `Rp ${formattedNumber}`;
};

export const formatNumber = (value: number): string => {
  return value.toLocaleString("id-ID"); // Format angka dengan pemisah ribuan
};

export const generateTransactionNumber = (transactionNumber: number) => {
  const now = new Date();
  const yearMonth = `${now.getFullYear()}-${("0" + (now.getMonth() + 1)).slice(
    -2
  )}`;
  const formattedNumber = ("0000" + transactionNumber).slice(-4);
  return `S0/${yearMonth}/${formattedNumber}`;
};
