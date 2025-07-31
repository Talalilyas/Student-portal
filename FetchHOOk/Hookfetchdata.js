import { useState, useEffect } from "react";

const reqest = async (
  url,
  setData,
  setLoading,
  setError,
  setPostLoading,
  method = "GET",
  body = null
) => {
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

    setData(result);
    return result;
  } catch (err) {
    setError(err.message);
    return null;
  } finally {
    method === "POST" ? setPostLoading(false) : setLoading(false);
  }
};

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    reqest(url, setData, setLoading, setError, setPostLoading, "GET");
  }, [url]);

  return {
    data,
    loading,
    error,
    postLoading,

    postData: (body) =>
      reqest(url, setData, setLoading, setError, setPostLoading, "POST", body),
  };
};

export default useFetch;
