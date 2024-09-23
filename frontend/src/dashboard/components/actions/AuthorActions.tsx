import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  useDeleteAuthorMutation,
  useUpdateAuthorMutation,
} from "@/dashboard/hooks/author";

import { Author } from "@/dashboard/interfaces/author";
import { authorUpdateSchema } from "@/dashboard/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const AuthorActions: React.FC<{ author: Author }> = ({ author }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const deleteAuthorMutation = useDeleteAuthorMutation();
  const updateAuthorMutation = useUpdateAuthorMutation();

  const form = useForm<z.infer<typeof authorUpdateSchema>>({
    resolver: zodResolver(authorUpdateSchema),
    defaultValues: {
      id: author.id,
      name: "",
    },
  });

  function onEditSubmit(values: z.infer<typeof authorUpdateSchema>) {
    updateAuthorMutation.mutate(values);
    setIsEditOpen(false);
  }

  const handleCopyId = () => {
    navigator.clipboard.writeText(author.id);
    toast("ID de la categoría copiado en el portapapeles", {
      position: "top-right",
    });
  };

  return (
    <>
      <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Esto eliminará permanentemente
              el autor.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setIsDeleteOpen(false);
              }}
            >
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                deleteAuthorMutation.mutate(author.id);
                setIsDeleteOpen(false);
              }}
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar</DialogTitle>
            <DialogDescription>Edita los datos del autor.</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onEditSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Autor nuevo"
                        {...field}
                        value={author.name}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Editar</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
          <DropdownMenuItem onClick={handleCopyId}>Copiar ID</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              setIsEditOpen(true);
            }}
          >
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setIsDeleteOpen(true);
            }}
          >
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
