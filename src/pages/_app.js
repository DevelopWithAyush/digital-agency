import Navbar from "@/components/Navbar";
import MouseState from "@/components/context/MouseContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  return (
    <>
      <MouseState>
        <Navbar />
        <Component {...pageProps} />
       </MouseState>
    </>
  );
}
