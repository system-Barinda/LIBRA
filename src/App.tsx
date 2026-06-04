// import React from "react";
// import ActivityPanel from "./components/ActivityPanel";
// import Navbar from "./components/Navbar";
// import OverviewCards from "./components/OverviewCards";
// import Sidebar from "./components/Sidebar";
// import TopBar from "./components/TopBar";

// function App() {
//   const [showMobileMenu, setShowMobileMenu] = React.useState(false);

//   const toggleMobileMenu = () => {
//     setShowMobileMenu(!showMobileMenu);
//   };

//   return (
//     <div className="min-h-screen bg-[#F7F6F4] flex flex-col md:flex-row font-sans">
      
//       {/* DESKTOP SIDEBAR: Visible on medium screens and up */}
//       <div className="hidden md:block md:w-64 shrink-0">
//         <Sidebar closeMenu={() => setShowMobileMenu(false)} />
//       </div>

//       {/* MOBILE SIDEBAR OVERLAY: Slides/Pops in when active */}
//       {showMobileMenu && (
//         <div className="fixed inset-0 z-50 flex md:hidden">
//           {/* Backdrop shadow overlay */}
//           <div 
//             className="fixed inset-0 bg-black/50 transition-opacity" 
//             onClick={toggleMobileMenu}
//           />
//           {/* Sidebar drawer container */}
//           <div className="relative w-72 max-w-xs bg-gray-700 h-full z-10 shadow-xl">
//             <Sidebar closeMenu={toggleMobileMenu} isMobile={true} />
//           </div>
//         </div>
//       )}

//       {/* MAIN CONTENT AREA */}
//       <div className="flex-1 flex flex-col min-w-0">
        
//         {/* MOBILE TOP NAVIGATION BAR */}
//         <header className="flex items-center justify-between bg-white px-4 py-3 border-b md:hidden sticky top-0 z-40">
//           {/* Brand Logo Element */}
//           <div className="flex items-center gap-2">
//             <div className="flex h-8 w-8 items-center justify-center rounded bg-orange-500 text-white font-bold text-sm">
//               L
//             </div>
//             <span className="font-bold text-slate-800 text-lg tracking-wider">LIBRA</span>
//           </div>
          
//           {/* Burger Menu Button Toggle */}
//           <button 
//             onClick={toggleMobileMenu} 
//             className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
//             aria-label="Toggle Menu"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//             </svg>
//           </button>
//         </header>

//         {/* APPLICATION BODY PADDING */}
//         <main className="p-2 border bg-amber-400 grid grid-cols-1 md:grid-cols-2">
//          <div className="rightside  h-screen w-full ">

//                <div className="">
//                    <TopBar />
//                </div>



//          </div>
//          <div className="rightside bg-slate-500 h-screen w-full"></div>
        
//         </main>
//       </div>

//     </div>
//   );
// }

// export default App;



// //  <main className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl w-full mx-auto flex-1 border bg-amber-400">
// //           {/* Desktop Only Nav Header */}
// //           <div className="hidden md:block">
// //             <Navbar />
// //           </div>

// //           <div>
// //             <TopBar />
// //           </div>
          
// //           <div>
// //             <OverviewCards />
// //           </div>
          
// //           <div>
// //             <ActivityPanel />
// //           </div>
// //         </main>



// App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
// import Books from "./pages/Books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inbox" element={<Inbox />} />
        {/* <Route path="/books" element={<Books />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;