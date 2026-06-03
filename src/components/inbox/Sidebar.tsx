import {
  LayoutDashboard,
  Inbox,
  Book,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>LIBRA</h2>

      <nav>
        <a href="#">
          <LayoutDashboard size={18} />
          Dashboard
        </a>

        <a href="#" className="active">
          <Inbox size={18} />
          Inbox
        </a>

        <a href="#">
          <Book size={18} />
          Books
        </a>

        <a href="#">
          <Users size={18} />
          Members
        </a>

        <a href="#">
          <Settings size={18} />
          Settings
        </a>

        <a href="#">
          <LogOut size={18} />
          Logout
        </a>
      </nav>
    </aside>
  );
}