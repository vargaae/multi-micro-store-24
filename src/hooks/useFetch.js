import { useEffect, useState } from "react";
import { makeRequest } from "../services/makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
        setErrorMessage(err);
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error, errorMessage };
};

export default useFetch;
