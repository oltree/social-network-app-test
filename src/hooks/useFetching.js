import { useCallback, useEffect, useState } from "react";

export const useFetching = (
  asyncCallback,
  initialValue,
  isLoadOnMount = true
) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDataLoad = useCallback(async () => {
    setLoading(true);
    try {
      const response = await asyncCallback();

      setData(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [asyncCallback]);

  useEffect(() => {
    if (isLoadOnMount) {
      handleDataLoad();
    }
  }, [isLoadOnMount]);

  return { data, isLoading, error, handleDataLoad };
};
