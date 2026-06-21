import Categories from "../components/inbox/Categories";
import EmailList from "../components/inbox/EmailList";
import EmailViewer from "../components/inbox/EmailViewer";

export default function Inbox() {
  return (
    <div className="border border-gray-900 h-screen bg-[#f4f4f4] flex flex-col">
     <div className="sidecontainer border h-screen lg:w-[20%] text-black">
      
      {/* Categories */}
           <Categories />

        </div>

     <div className="rightcontainer border h-screen w-full lg:w-[80%] text-black flex flex-col">
               {/* Email List */}
                  <div className="w-full lg:w-[30%]  border-r border-gray-200 bg-[#fafafa]">
                       <EmailList />
                  </div>


                {/* Email Viewer */}
                   <div className="w-full lg:w-[70%] bg-white">
                    <EmailViewer />
                  </div>
     </div>
    </div>
  );
}

