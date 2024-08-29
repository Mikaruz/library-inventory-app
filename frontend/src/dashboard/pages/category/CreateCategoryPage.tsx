import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCategory } from "@/dashboard/hooks/category/useCategory";

export const CreateCategoryPage = () => {
  const { createCategory } = useCategory();

  const formSchema = z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(2, {
        message: "Name must be at least 2 characters",
      })
      .max(25, {
        message: "Name must be at most 20 characters",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    createCategory(values.name);
  }

  return (
    <main className="h-full w-full p-4 xl:ml-64 xl:w-[calc(100%-256px)] xl:p-7">
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
          <Button type="submit">Crear</Button>
        </form>
      </Form>
    </main>
  );
};
