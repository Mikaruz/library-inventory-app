import { deleteAuthor } from "@/dashboard/api/authorApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteAuthorMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteAuthor,
    onSuccess: () => {
      toast.success("Se elimino el autor exitosamente.", {
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
