import { AuthProvider } from "./auth/context/AuthProvider";
import { CategoryProvider } from "./dashboard/context/category/CategoryProvider";
import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AuthProvider>
        <CategoryProvider>
          <AppRouter />
        </CategoryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
