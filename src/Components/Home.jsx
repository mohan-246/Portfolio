import { useEffect, useState } from "react";
import App from "../App";
import Loader from "./Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    setTimeout(() => {
        setLoading(false)
    }, 100);
      
   

  }, []);
  return <>
  {loading ? <Loader /> : <App />}
  </>;
};

export default Home;
