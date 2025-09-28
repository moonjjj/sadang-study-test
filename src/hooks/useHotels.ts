import { getHotels } from "@remote/hotels";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

function useHotels({ onSuccess }: { onSuccess?: () => void } = {}) {
  const { data, isLoading, ...rest } = useQuery({
    queryKey: useHotels.getKey(),
    queryFn: getHotels,
  });

  useEffect(() => {
    if (isLoading === false && data != null) {
      onSuccess?.();
    }
  }, [data, isLoading, onSuccess]);

  return { data, isLoading, ...rest };
}

useHotels.getKey = () => ["hotels"];

export default useHotels;
