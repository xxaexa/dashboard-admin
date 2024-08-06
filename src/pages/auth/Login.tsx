import { useState, useEffect } from "react";
import {
  InputUsername,
  InputPassword,
  Button,
  MainWrap,
} from "../../components";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/features/userSlice";

const Login = () => {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({ username: "", password: "" });
  const [loginStatus, setLoginStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (values.username === "" || values.password === "") {
      toast.error("Please input username and password");
      return;
    }
    try {
      const response = await loginUser(values).unwrap();
      if (response.metadata.status === 200) {
        dispatch(setUser(response));
        setLoginStatus("success");
      } else {
        setLoginStatus("error");
        toast.error(
          `Login failed: ${response.metadata.message || "Unknown error"}`
        );
      }
    } catch (err) {
      console.error("Login error:", err);
      setLoginStatus("error");
      toast.error("Login failed, please try again");
    }
  };

  useEffect(() => {
    if (loginStatus === "success") {
      toast.success("Login Success");
      navigate("/");
    } else if (loginStatus === "error") {
      console.log("Login failed, please check your credentials");
    }
  }, [loginStatus, navigate]);

  return (
    <MainWrap>
      <h2 className="text-2xl font-bold text-center ">Login</h2>
      <form onSubmit={handleLogin} className="space-y-6 py-6">
        <InputUsername
          label="Username"
          id="username"
          name="username"
          type="text"
          value={values.username}
          onChange={handleChange}
        />
        <InputPassword
          label="Password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <Button type="submit" text="Login" />
      </form>
    </MainWrap>
  );
};

export default Login;
