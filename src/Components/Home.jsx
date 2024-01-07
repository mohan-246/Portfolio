import { useEffect, useState } from "react";
import App from "../App";
import Loader from "./Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handlePageLoad = () => {
    //   console.log("All images are loaded.");
    setTimeout(() => {
        setLoading(false)
    }, 100);
      
    };

    window.addEventListener("load", handlePageLoad);

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);
  return <>
  {loading ? <Loader /> : <App />}
  </>;
};

export default Home;
