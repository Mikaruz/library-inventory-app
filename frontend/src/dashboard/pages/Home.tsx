import { ModeToggle } from "@/components/mode-toggle";

export const Home = () => {
  return (
    <main className="h-screen w-full xl:w-[calc(100%-256px)] xl:ml-64">
      <h2>HOME</h2>
      <h2>Este es mi casa uwu</h2>
      <ModeToggle />
    </main>
  );
};
