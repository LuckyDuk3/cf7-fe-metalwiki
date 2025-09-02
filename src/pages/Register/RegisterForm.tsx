import React from "react";
import FormInput from "../../components/FormInput";
import { useRegister } from "./useRegister";

const RegisterForm: React.FC = () => {
  const {
    name, setName,
    surname, setSurname,
    email, setEmail,
    username, setUsername,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    handleSubmit,
    error,
  } = useRegister();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black/80 backdrop-blur-md p-10 rounded-lg shadow-2xl w-full max-w-sm"
    >
      <h2 className="text-3xl mb-6 font-metal text-green-500 text-center tracking-wide">
        Join MetalWiki
      </h2>

      {error && <p className="mb-4 text-red-500 font-semibold text-sm">{error}</p>}

      <FormInput
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="given-name"
      />

      <FormInput
        label="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        autoComplete="family-name"
      />

      <FormInput
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        autoComplete="email"
      />

      <FormInput
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="username"
      />

      <FormInput
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        autoComplete="new-password"
      />

      <FormInput
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        autoComplete="new-password"
      />

      <button
        type="submit"
        className="w-full bg-green-700 hover:bg-green-800 p-3 rounded font-bold tracking-wide uppercase"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
