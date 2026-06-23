import Categories from "../components/inbox/Categories";
import EmailList from "../components/inbox/EmailList";
import EmailViewer from "../components/inbox/EmailViewer";

export default function Inbox() {
  return (
    // Global grid container across screens
    <div className="h-screen w-screen bg-[#f4f4f4] flex flex-col lg:flex-row overflow-hidden text-black">
      
      {/* 1. Left Sidebar Column - Categories */}
      <div className="hidden lg:block lg:w-[20%] xl:w-[18%] h-full shrink-0">
        <Categories isMobile={false} />
      </div>

      {/* 2. Middle Column - Email List Summary Stream */}
      <div className="w-full lg:w-[32%] xl:w-[28%] h-full border-r border-gray-200 bg-[#fafafa]">
        <EmailList />
      </div>

      {/* 3. Right Column - Full Live Email Body Viewer */}
      <div className="hidden lg:block lg:w-[48%] xl:w-[54%] h-full bg-white">
        <EmailViewer />
      </div>

    </div>
  );
}