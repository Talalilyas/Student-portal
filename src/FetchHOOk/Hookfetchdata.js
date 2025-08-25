import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = useCallback (async  (method = "GET", body = null) => {
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
       if (method === "GET") {
        setData(result);
      }
    
      return result;
    } catch (err) {
      setError(err.message);
      
     
      return null;
    } finally {
       method === "POST" ? setPostLoading(false) : setLoading(false);
    }
  
  },[url])
  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return {
    data,
    loading,
    error,
    postLoading,
    fetchData: () => handleRequest("GET"),
    postData: (body) => handleRequest("POST", body),
  };
}

export default useFetch;
