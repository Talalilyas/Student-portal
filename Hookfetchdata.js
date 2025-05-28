import { useState, useEffect } from "react";

const useFetchQuotes = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const sendReq = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(" error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    sendReq();
  }, [url]);

  return { data, loading, sendReq };
};

export default useFetchQuotes;
