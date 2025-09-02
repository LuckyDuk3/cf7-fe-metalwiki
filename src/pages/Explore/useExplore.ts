import { useEffect, useState } from "react";
import api from "../../api/axios";
import type { Band } from "./types";

export const useExplore = () => {
  const [bands, setBands] = useState<Band[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  const fetchBands = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const userRes = await api.get("/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsername(userRes.data.username);

      const res = await api.get("/bands");
      setBands(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch bands.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBands();
  }, []);

  return { bands, loading, error, username, refresh: fetchBands };
};
