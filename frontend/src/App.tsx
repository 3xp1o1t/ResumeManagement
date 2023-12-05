import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './providers/theme-provider';

const Home = lazy(() => import('./pages/home'));
const Companies = lazy(() => import('./pages/companies'));
const AddCompany = lazy(() => import('./pages/companies/add'));

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="container flex-1 py-6">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/companies">
                <Route index element={<Companies />} />
                <Route path="add" element={<AddCompany />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
