import { useState, useEffect } from "react";

const useFetch = (url, autoFetch = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const sendReq = async (options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "Get", 
        
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      setError(err.message);
      console.error("Request error:", err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      sendReq();
    }
  }, [url]);

  return { data, loading, error, sendReq };
};

export default useFetch;
