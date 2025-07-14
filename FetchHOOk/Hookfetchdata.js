import { useState, useEffect } from "react";

const useFetch = (url, autoFetch = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [postLoading, setPostLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = async (method = "GET", body = null) => {
    method === "POST" ? setPostLoading(true) : setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        headers: body ? { "Content-Type": "application/json" } : undefined,
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const result = await response.json();

      if (method === "GET") setData(result);
      if (method === "POST" && autoFetch) await handleRequest("GET");

      return result;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      method === "POST" ? setPostLoading(false) : setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) handleRequest("GET");
  }, [url]);

  return {
    data,
    loading,
    error,
    postLoading,
    fetchData: () => handleRequest("GET"),
    postData: (body) => handleRequest("POST", body),
  };
};

export default useFetch;
