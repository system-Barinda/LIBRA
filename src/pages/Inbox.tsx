import Categories from "../components/inbox/Categories";
import EmailList from "../components/inbox/EmailList";
import EmailViewer from "../components/inbox/EmailViewer";

export default function Inbox() {
  return (
    <div className="border border-gray-900 h-screen bg-[#f4f4f4] flex">
     <div className="sidecontainer border h-screen w-[20%] text-black">
      
      {/* Categories */}
           <Categories />

        </div>

     <div className="rightcontainer border h-screen w-[80%] text-black bg-amber-300 flex">
               {/* Email List */}
                  <div className="w-full  border-r border-gray-200 bg-[#fafafa]">
                       <EmailList />
                  </div>


                {/* Email Viewer */}
                   <div className="hidden flex-1 bg-white lg:block">
                    <EmailViewer />
                  </div>
     </div>
    </div>
  );
}





// import Categories from "../components/inbox/Categories";
// import EmailList from "../components/inbox/EmailList";
// import EmailViewer from "../components/inbox/EmailViewer";

// export default function Inbox() {
//   return (
//     <div className="border border-gray-900 min-h-screen bg-[#f4f4f4] p-3 md:p-0">
//       <div className="border mx-auto flex h-[calc(100vh-24px)] w-full overflow-hidden rounded-[28px] bg-red-800 shadow-lg md:h-screen  md:rounded-none md:shadow-none">

//         {/* Categories */}
//         <div className="hidden w-[260px] border-r border-gray-200 bg-white md:block">
//           <Categories />
//         </div>

//         {/* Email List */}
//         <div className="w-full  border-r border-gray-200 bg-[#fafafa]">
//           <EmailList />
//         </div>

//         {/* Email Viewer */}
//         <div className="hidden flex-1 bg-white lg:block">
//           <EmailViewer />
//         </div>

//       </div>
//     </div>
//   );
// }