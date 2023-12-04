import Navbar from './components/Navbar';
import { ThemeProvider } from './providers/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="max-w-[1440px] mx-auto relative z-30">
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
