import { createAuthor } from "@/dashboard/api/authorApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateAuthorMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createAuthor,
    onSuccess: () => {
      toast.success("Se creo el autor exitosamente.", {
        position: "top-right",
      });
      queryClient.invalidateQueries({ queryKey: ["authors"] });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-right",
      });
    },
  });

  return mutation;
};
