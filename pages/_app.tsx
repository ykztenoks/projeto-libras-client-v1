import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import { AuthContextComponent } from "./context/authContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextComponent>
      <Component {...pageProps} />
    </AuthContextComponent>
  );
}
