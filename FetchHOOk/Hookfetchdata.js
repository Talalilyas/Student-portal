import { useState, useEffect } from "react";

const useFetch = (url, method = "GET", autoFetch = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const sendReq = async (body = null) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
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
      console.error("Fetch Error:", err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if ( method === "GET") {
      sendReq();
    }
    
     
  }, [url]);

  return { data, loading, error, sendReq };
};

export default useFetch;
