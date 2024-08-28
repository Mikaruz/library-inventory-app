import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import loginImage from "../assets/login-image.jpg";
import book from "../assets/book.svg";

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
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z
    .string({
      required_error: "El correo electrónico es obligatorio",
    })
    .min(5, {
      message: "El correo electrónico debe tener al menos 5 caracteres",
    })
    .max(255, {
      message: "El correo electrónico no debe exceder los 255 caracteres",
    })
    .email({
      message: "El correo electrónico no es válido",
    }),
  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .min(5, {
      message: "La contraseña debe tener al menos 5 caracteres",
    })
    .max(16, {
      message: "La contraseña debe tener como máximo 16 caracteres",
    }),
});

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
