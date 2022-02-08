import { useEffect, useState } from "react";

const useFetch = (url:string) => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();

    return () => {
      setError(null)
      setLoading(false);
      setData(null)
    }
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
