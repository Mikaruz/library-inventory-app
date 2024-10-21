import { createReader } from "@/dashboard/api/readerApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateReaderMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createReader,
    onSuccess: () => {
      toast.success("Se creo el lector exitosamente.", {
        position: "top-right",
      });
      queryClient.invalidateQueries({ queryKey: ["readers"] });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-right",
      });
    },
  });

  return mutation;
};
