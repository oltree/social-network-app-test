import { useEffect, useState } from "react";

export const useFetching = (asyncCallback, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await asyncCallback();

        setData(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, error };
};
