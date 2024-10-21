import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoadingSpiner } from "../components/LoadingSpiner";
import { DataTable } from "../components/table/DataTable";
import { readerColumns } from "../components/table/ReaderColumn";
import { useCreateReaderMutation } from "../hooks/reader/useCreateReaderMutations";
import { useQueryReaders } from "../hooks/reader/useReaders";
import { readerCreateSchema } from "../schemas";

export const ReadersPage = () => {
  const [open, setOpen] = useState(false);
  const { isLoading, readers } = useQueryReaders();
  const readerCreateMutation = useCreateReaderMutation();

  const ocupations = [
    { label: "Estudiante", value: "STUDENT" },
    { label: "Profesor", value: "TEACHER" },
  ] as const;

  const form = useForm<z.infer<typeof readerCreateSchema>>({
    resolver: zodResolver(readerCreateSchema),
    defaultValues: {
      name: "",
      lastName: "",
      dni: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  function onSubmit(values: z.infer<typeof readerCreateSchema>) {
    readerCreateMutation.mutate(values);
    setOpen(false);
  }

  return (
    <main className="h-full w-full flex-1 p-4 xl:ml-64 xl:w-[calc(100%-256px)] xl:px-7">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex w-max items-center rounded-md bg-gray-800 px-4 py-2 text-gray-200">
            Crear lector
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Crear lector</DialogTitle>
            <DialogDescription>
              Complete los campos para crear un nuevo lector.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Apellido" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dni"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="DNI" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Teléfono" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ocupation"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "justify-between",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value
                              ? ocupations.find(
                                  (ocupation) =>
                                    ocupation.value === field.value,
                                )?.label
                              : "Ocupación"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[300px] p-0" align="start">
                        <Command>
                          <CommandList>
                            <CommandGroup>
                              {ocupations.map((ocupation) => (
                                <CommandItem
                                  value={ocupation.label}
                                  key={ocupation.value}
                                  onSelect={() => {
                                    form.setValue("ocupation", ocupation.value);
                                    console.log(ocupation.value);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      ocupation.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0",
                                    )}
                                  />
                                  {ocupation.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Dirección" {...field} />
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
          <DataTable columns={readerColumns} data={readers} />
        </div>
      )}
    </main>
  );
};
