
import Sidebar from "../components/inbox/Sidebar";
import Categories from "../components/inbox/Categories";
import EmailList from "../components/inbox/EmailList";
import EmailViewer from "../components/inbox/EmailViewer";


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