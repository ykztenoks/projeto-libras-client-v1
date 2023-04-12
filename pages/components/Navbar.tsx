import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { AuthContextType } from "../context/authContext";
type User = {
  token: string | undefined;
  user:
    | {
        email: string;
        name: string;
        role: string;
      }
    | undefined;
};

export default function Navbar() {
  const { loggedInUser } = useContext<AuthContextType>(AuthContext);
  console.log(loggedInUser);

  return (
    <nav className="p-6">
      {/* {loggedInUser.user && <h2>Hi, {loggedInUser.user.name}</h2>} */}
      <ul className="flex flex-row justify-evenly">
        <Link href="/signin">
          <li className="border rounded-xl p-2">sign in</li>
        </Link>
        <Link href="/signup">
          <li className="border rounded-xl p-2">sign up</li>
        </Link>
        <Link href="/">
          <li className="border rounded-xl p-2">home</li>
        </Link>
        <Link href="/profile">
          <li className="border rounded-xl p-2">profile</li>
        </Link>
      </ul>
    </nav>
  );
}
