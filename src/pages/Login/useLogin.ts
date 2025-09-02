import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService  from "../../services/authService";

import type { LoginFormValues } from "./types";
import axios from "axios";

export const useLogin = () => {
  const [form, setForm] = useState<LoginFormValues>({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      return setError("Please enter username and password");
    }

    try {
      const res = await authService.loginUser(form.username, form.password);
      localStorage.setItem("token", res.token);
      localStorage.setItem("username", form.username);
      setError("");
      navigate("/explore");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? "Login failed.");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return {
    form,
    error,
    handleChange,
    handleSubmit,
  };
};
