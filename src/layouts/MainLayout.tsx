import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
      const [showMobileMenu, setShowMobileMenu] = React.useState(false);
       const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <div className="app-layout">
       <Sidebar closeMenu={() => setShowMobileMenu(false)} />

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}