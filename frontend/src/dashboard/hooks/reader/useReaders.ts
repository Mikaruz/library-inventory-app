import { getReaders } from "@/dashboard/api/readerApi";
import { useQuery } from "@tanstack/react-query";

export const useQueryReaders = () => {
  const { isLoading, data: readers = [] } = useQuery({
    queryKey: ["readers"],
    queryFn: getReaders,
    staleTime: 1000 * 60 * 5,
  });

  return { isLoading, readers };
};
