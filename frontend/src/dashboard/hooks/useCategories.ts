import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/data";

export const useCategories = () => {
  const { isLoading, data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5,
  });

  return { isLoading, categories };
};
