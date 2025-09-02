import React, { useState, useEffect, useRef } from "react";
import api from "../api/axios";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

interface CreatedBy {
  _id?: string;
  username?: string;
}

interface Band {
  _id?: string;
  name: string;
  genre: string;
  country: string;
  formationYear: number;
  members: string[];
  createdBy?: CreatedBy | string;
}

interface BandManagerProps {
  username: string;
  bands: Band[];
  onRefresh: () => void;
}

const metalGenres = [
  "Alternative Metal", "Atmospheric Black Metal", "Avant-Garde Metal", "Black Metal",
  "Blackened Death Metal", "Crossover Thrash", "Crust Punk", "Death Metal", "Deathcore",
  "Depressive Suicidal Black Metal (DSBM)", "Doom Metal", "Folk Metal", "Gothic Metal",
  "Grindcore", "Groove Metal", "Hard Rock", "Heavy Metal", "Industrial Metal", "Mathcore",
  "Melodic Death Metal", "Metalcore", "Nu Metal", "Post-Metal", "Power Metal", "Progressive Metal",
  "Sludge Metal", "Speed Metal", "Stoner Metal", "Symphonic Black Metal", "Symphonic Metal",
  "Technical Death Metal", "Thrash Metal", "Viking Metal"
];

const CountryDropdown: React.FC<{ value: string; onChange: (v: string) => void }> = ({ value, onChange }) => {
  const [countryList, setCountryList] = useState<{ code: string; name: string }[]>([]);

  useEffect(() => {
    const countryObj = countries.getNames("en", { select: "official" });
    const list = Object.entries(countryObj).map(([code, name]) => ({ code, name }));
    setCountryList(list);
  }, []);

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 rounded bg-gray-800 border border-gray-600"
      required
    >
      <option value="">Select Country</option>
      {countryList.map(({ code, name }) => <option key={code} value={name}>{name}</option>)}
    </select>
  );
};

const BandManager: React.FC<BandManagerProps> = ({ bands, onRefresh }) => {
  const [form, setForm] = useState<Band>({
    name: "",
    genre: "",
    country: "",
    formationYear: new Date().getFullYear(),
    members: [],
  });

  const [membersText, setMembersText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "formationYear" ? Number(value) : value });
  };

  const handleMembersChange = (e: React.ChangeEvent<HTMLInputElement>) => setMembersText(e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const members = membersText.split(",").map(m => m.trim()).filter(Boolean);
      const formData = { ...form, members };

      if (editingId) await api.put(`/bands/${editingId}`, formData);
      else await api.post("/bands", formData);

      setForm({ name: "", genre: "", country: "", formationYear: new Date().getFullYear(), members: [] });
      setMembersText("");
      setEditingId(null);
      onRefresh();
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to save band.");
    }
  };

  const handleEdit = (band: Band) => {
    setForm({ ...band });
    setMembersText(band.members.join(", "));
    setEditingId(band._id || null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/bands/${id}`);
      onRefresh();
    } catch (err) {
      console.error(err);
      setError("Failed to delete band.");
    }
  };

  const token = localStorage.getItem("token") || "";
  let currentUserId = "";
  let isAdmin = false;

  try {
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log("JWT payload:", payload); 

      currentUserId = payload.userId || "";
      isAdmin = Array.isArray(payload.roles) && payload.roles.includes("admin");
      console.log("isAdmin:", isAdmin, "currentUserId:", currentUserId); 
    }
  } catch (err) {
    console.error("Failed to parse token:", err);
  }

  
  const visibleBands = bands.filter((band) => {
    if (isAdmin) return true;
    if (!band.createdBy) return false;
    if (typeof band.createdBy === "string") return band.createdBy === currentUserId;
    if (typeof band.createdBy === "object" && "_id" in band.createdBy) return band.createdBy._id === currentUserId;
    return false;
  });

  console.log("Visible bands:", visibleBands); 

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Manage Your Bands</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 bg-gray-900 p-6 rounded-lg shadow-lg">
        <input type="text" name="name" placeholder="Band Name" value={form.name} onChange={handleChange} className="p-2 rounded bg-gray-800 border border-gray-600" required />
        <select name="genre" value={form.genre} onChange={handleChange} className="p-2 rounded bg-gray-800 border border-gray-600" required>
          <option value="">Select Genre</option>
          {metalGenres.map((genre) => <option key={genre} value={genre}>{genre}</option>)}
        </select>
        <CountryDropdown value={form.country} onChange={(country) => setForm({ ...form, country })} />
        <input type="number" name="formationYear" placeholder="Formation Year" value={form.formationYear} onChange={handleChange} className="p-2 rounded bg-gray-800 border border-gray-600" required />
        <input type="text" placeholder="Members (comma-separated)" value={membersText} onChange={handleMembersChange} className="p-2 rounded bg-gray-800 border border-gray-600" />
        <button type="submit" className="bg-red-700 hover:bg-red-800 p-2 rounded font-bold">{editingId ? "Update Band" : "Create Band"}</button>
      </form>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-2">Bands</h3>
        <ul className="space-y-4">
          {visibleBands.map((band) => {
            const canEditOrDelete = isAdmin || (
              band.createdBy &&
              ((typeof band.createdBy === "string" && band.createdBy === currentUserId) ||
               (typeof band.createdBy === "object" && "_id" in band.createdBy && band.createdBy._id === currentUserId))
            );

            return (
              <li key={band._id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{band.name}</h4>
                  <p className="text-sm text-gray-400">
                    {band.genre}, {band.country}, {band.formationYear}
                    {isAdmin && typeof band.createdBy === "object" && "_id" in band.createdBy && ` | Created by: ${band.createdBy.username}`}
                  </p>
                </div>
                <div className="space-x-2">
                  {canEditOrDelete && (
                    <>
                      <button onClick={() => handleEdit(band)} className="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-sm">Edit</button>
                      <button onClick={() => handleDelete(band._id!)} className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-sm">Delete</button>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BandManager;
