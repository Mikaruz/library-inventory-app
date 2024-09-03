import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../api/data";

export const useQueryCategory = (categoryId: string) => {
  const { isLoading, data: category } = useQuery({
    queryKey: ["categories", categoryId],
    queryFn: () => getCategory(categoryId),
    staleTime: 1000 * 60 * 5,
  });

  return { isLoading, category };
};
