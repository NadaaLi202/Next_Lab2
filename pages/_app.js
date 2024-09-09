import Navbar from "@component/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  if (Component.getLayout) {
    return <Component {...pageProps} />;
  }
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
