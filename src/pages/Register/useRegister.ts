import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import type { RegisterData } from "./types";
import axios from "axios";

export function useRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword || !name || !surname || !email) {
      return setError("Please fill all fields");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    const data: RegisterData = { username, password, name, surname, email };

    try {
      await authService.registerUser(data);
      setError("");
      navigate("/login");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? "Registration failed.");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return {
    username, setUsername,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    name, setName,
    surname, setSurname,
    email, setEmail,
    handleSubmit,
    error,
  };
}
