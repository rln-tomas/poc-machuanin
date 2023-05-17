import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.css";
import Layout from "./components/Layout";
import { AdminProvider } from "./Context";

function App() {
  return (
    <BrowserRouter>
      <AdminProvider>
        <Layout>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
          </Routes>
        </Layout>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
