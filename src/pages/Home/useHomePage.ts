import { useNavigate } from "react-router-dom";

export function useHomePage() {
  const navigate = useNavigate();

  return { navigate };
}
