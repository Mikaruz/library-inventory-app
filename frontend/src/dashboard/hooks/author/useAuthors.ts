import { useQuery } from "@tanstack/react-query";
import { getAuthors } from "../../api/authorApi";

export const useQueryAuthors = () => {
  const { isLoading, data: authors = [] } = useQuery({
    queryKey: ["authors"],
    queryFn: getAuthors,
    staleTime: 1000 * 60 * 5,
  });

  return { isLoading, authors };
};
