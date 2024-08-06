import { UserResp } from "../types";

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

export const generateTransactionNumber = (
  transactionNumber: number,
  prefix: string = "S0"
) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const formattedNumber = ("0000" + transactionNumber).slice(-4);

  return `${prefix}/${year}-${month}/${formattedNumber}`;
};

export const addUserToLocalStorage = (user: UserResp) => {
  localStorage.setItem("user", JSON.stringify(user.response));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
