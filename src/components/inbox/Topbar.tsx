import {
  Search,
  Bell,
  SlidersHorizontal,
  Plus,
} from "lucide-react";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1>Inbox</h1>
      </div>

      <div className="topbar-center">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search anything..."
        />
      </div>

      <div className="topbar-right">
        <button>
          <SlidersHorizontal size={18} />
        </button>

        <button>
          <Bell size={18} />
        </button>

        <button className="add-btn">
          <Plus size={18} />
        </button>

        <div className="profile">
          <img
            src="/avatar.jpg"
            alt=""
          />

          <div>
            <h4>Noah Tanaka</h4>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}