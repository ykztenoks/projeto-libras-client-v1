import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { useRouter } from "next/router";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { setLoggedInUser } = useContext(AuthContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await axios.post(
      "https://projeto-libras-server.vercel.app/user/login",
      form
    );
    localStorage.setItem("loggedInUser", JSON.stringify(response.data));
    setLoggedInUser(response.data);

    console.log(response.data);

    router.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-slate-500"
        />
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="bg-slate-500"
        />
        <button type="submit"> ENTRA AI CARALHO!!!!!!!!!!!!!</button>
      </form>
    </div>
  );
}
