import api from "../api/axios";

export interface RegisterData {
  username: string;
  password: string;
  name: string;
  surname: string;
  email: string;
}

const registerUser = async (data: RegisterData) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

const loginUser = async (username: string, password: string) => {
  const response = await api.post("/auth/login", { username, password });
  return response.data;
};

const authService = {
  registerUser,
  loginUser,
};

export default authService;
