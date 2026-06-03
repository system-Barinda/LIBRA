// Inbox.tsx

import Sidebar from "../components/Sidebar";
import Categories from "../components/Categories";
import EmailList from "../components/EmailList";
import EmailViewer from "../components/EmailViewer";

import "../styles/inbox.css";

export default function Inbox() {
  return (
    <div className="inbox-page">
      <Sidebar />

      <div className="categories-panel">
        <Categories />
      </div>

      <div className="email-list-panel">
        <EmailList />
      </div>

      <div className="email-view-panel">
        <EmailViewer />
      </div>
    </div>
  );
}