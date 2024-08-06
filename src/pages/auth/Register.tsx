import React, { useState } from "react";
import {
  InputPassword,
  InputUsername,
  Button,
  MainWrap,
  LargeText,
} from "../../components";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password tidak sama");
      return;
    }
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirm-password") {
      setConfirmPassword(value);
    }
  };

  return (
    <MainWrap>
      <LargeText text="Register" />
      <form onSubmit={handleRegister} className="space-y-6 space-y-6 py-6">
        <InputUsername
          label="Username"
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
          value={username}
        />

        <InputPassword
          label="Password"
          id="password"
          name="password"
          onChange={handleChange}
          value={password}
        />

        <InputPassword
          label="Confirm Password"
          id="confirm-password"
          name="confirm-password"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type="submit" text="Register" />
      </form>
    </MainWrap>
  );
};

export default Register;
