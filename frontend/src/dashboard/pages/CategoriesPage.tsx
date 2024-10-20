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
import { useCreateCategoryMutation } from "@/dashboard/hooks/category/useCreateCategoryMutations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { categoryColumns } from "../components/table/CategoryColumn";
import { DataTable } from "../components/table/DataTable";
import { useQueryCategories } from "../hooks/category/useCategories";
import { categoryCreateSchema } from "../schemas";
import { LoadingSpiner } from "../components/LoadingSpiner";

export const CategoriesPage = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, categories } = useQueryCategories();

  const categoryCreateMutation = useCreateCategoryMutation();

  const form = useForm<z.infer<typeof categoryCreateSchema>>({
    resolver: zodResolver(categoryCreateSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof categoryCreateSchema>) {
    categoryCreateMutation.mutate(values);
    setOpen(false);
  }

  return (
    <main className="h-full w-full flex-1 p-4 xl:ml-64 xl:w-[calc(100%-256px)] xl:px-7">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex w-max items-center rounded-md bg-gray-800 px-4 py-2 text-gray-200">
            Crear categoría
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Crear categoría</DialogTitle>
            <DialogDescription>
              Crea una categoría para organizar los libros.
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
          <DataTable columns={categoryColumns} data={categories} />
        </div>
      )}
    </main>
  );
};
