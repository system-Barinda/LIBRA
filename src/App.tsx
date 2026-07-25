import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import SimpleLayout from "./layouts/simpleLayout";

import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import LibraryActivity from "./pages/LibraryActivity";
import Books from "./pages/Books";
import Members from "./pages/Members";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Supply from "./pages/SupplyAndDemand";
import StockManagement from "./pages/StockManagement";
import DashboardHomePage from "./pages/DashboardHomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SimpleLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<DashboardHomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/activity" element={<LibraryActivity />} />
          <Route path="/books" element={<Books />} />
          <Route path="/management/supply" element={<Supply />} />
          <Route path="/management/stock" element={<StockManagement />} />
          <Route path="/members" element={<Members />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
