import { ThemeProvider } from "../hooks/useTheme";
import { AuthProvider } from "../features/auth/auth.store";

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}
