import { updateAuthor } from "@/dashboard/api/authorApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateAuthorMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateAuthor,
    onSuccess: () => {
      toast.success("Se actualizó el autor exitosamente.", {
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
