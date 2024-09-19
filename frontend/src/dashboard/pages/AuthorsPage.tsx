import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoadingSpiner } from "../components/LoadingSpiner";
import { DataTable } from "../components/table/DataTable";
import { useQueryAuthors } from "../hooks/author/useAuthors";
import { authorColumns } from "../components/table/AuthorColumn";
import { authorCreateSchema } from "../schemas";
import { useCreateAuthorMutation } from "../hooks/author";

export const AuthorsPage = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, authors } = useQueryAuthors();

  const authorCreateMutation = useCreateAuthorMutation();

  const form = useForm<z.infer<typeof authorCreateSchema>>({
    resolver: zodResolver(authorCreateSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof authorCreateSchema>) {
    authorCreateMutation.mutate(values);
    setOpen(false);
  }

  return (
    <main className="h-full w-full p-4 xl:ml-64 xl:w-[calc(100%-256px)] xl:px-7">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex w-max items-center rounded-md bg-gray-800 px-4 py-2 text-gray-200">
            Crear autor
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Crear Autor</DialogTitle>
            <DialogDescription>
              Crea un autor para organizar los libros.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Categoría nueva" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Crear</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <div className="py-4">
          <DataTable columns={authorColumns} data={authors} />
        </div>
      )}
    </main>
  );
};
