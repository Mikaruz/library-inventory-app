import { deleteCategory } from "@/dashboard/api/categoryApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      toast.success("Se eliminó la categoría exitosamente.", {
        position: "top-right",
      });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-right",
      });
    },
  });

  return mutation;
};
