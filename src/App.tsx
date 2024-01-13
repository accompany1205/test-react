import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomeComponent from "./pages/Home";

import "./App.css";
import TestProvider from "./contexts/TestContext";
import { PrimeReactProvider } from "primereact/api";

function App() {
  return (
    <PrimeReactProvider>
      <TestProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeComponent />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TestProvider>
    </PrimeReactProvider>
  );
}

export default App;
