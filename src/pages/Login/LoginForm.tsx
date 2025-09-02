import React from "react";
import { useLogin } from "./useLogin";
import FormInput from "../../components/FormInput";

const LoginForm: React.FC = () => {
  const { form, error, handleChange, handleSubmit } = useLogin();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black/80 backdrop-blur-md p-10 rounded-lg shadow-2xl w-full max-w-sm"
    >
      <h2 className="text-3xl mb-6 font-metal text-red-600 text-center tracking-wide">
        Login to MetalWiki
      </h2>

      {error && <p className="mb-4 text-red-500 font-semibold text-sm">{error}</p>}

      <FormInput
        label="Username"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-red-700 hover:bg-red-800 p-3 rounded font-bold tracking-wide uppercase"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
