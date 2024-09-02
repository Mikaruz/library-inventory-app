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
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import book from "../assets/book.svg";
import loginImage from "../assets/login-image.jpg";
import { useAuth } from "../hooks/useAuth";
import { formSchema } from "../schemas/formSchema";

export const Login = () => {
  const navigate = useNavigate();
  const { singIn, isAuthenticated } = useAuth();

  //TODO Mejorar el flujo de redirección
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard/home");
    }
  }, [isAuthenticated, navigate]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    singIn(values.email, values.password);
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center md:bg-gray-200">
      <div className="flex h-[35rem] rounded-lg bg-white">
        <img
          src={loginImage}
          className="hidden h-auto w-80 rounded-lg object-cover grayscale filter md:block"
          alt="login-image"
        />
        <div className="flex h-auto w-96 flex-col items-center justify-center py-10">
          <img src={book} className="mb-2 h-12 w-12" alt="logo" />

          <h2 className="mb-1 text-xl font-bold">Bienvenido</h2>
          <p className="mb-6 text-sm text-gray-600">
            Por favor, ingresa tus credenciales
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full flex-col space-y-8 px-11"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-black">
                Ingresar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
