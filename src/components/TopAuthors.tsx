// import { ChevronDown, BookOpen, Users } from "lucide-react";

// interface Author {
//   id: number;
//   name: string;
//   avatar: string;
//   booksCount: number;
//   borrowersCount: number;
// }

// const authors: Author[] = [
//   {
//     id: 1,
//     name: "Ava Thornton",
//     avatar:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
//     booksCount: 6,
//     borrowersCount: 365,
//   },
//   {
//     id: 2,
//     name: "Leo Vance",
//     avatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
//     booksCount: 5,
//     borrowersCount: 342,
//   },
//   {
//     id: 3,
//     name: "Mira Ellison",
//     avatar:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
//     booksCount: 4,
//     borrowersCount: 326,
//   },
//   {
//     id: 4,
//     name: "Olivia Wilson",
//     avatar:
//       "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
//     booksCount: 3,
//     borrowersCount: 365,
//   },
// ];

// export default function TopAuthors() {
//   return (
//     <div className="w-full bg-[#f5f6f8]  border border-red-300">
//       {/* Header */}
//       <div className="mb-5 flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-[#1f2937]">
//           Top Authors
//         </h2>

//         <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
//           This Week
//           <ChevronDown size={15} />
//         </button>
//       </div>

//       {/* Authors Card */}
//       <div className="overflow-hidden rounded-2xl bg-gray-500 border border-gray-100 gap-3">
//         {authors.map((author, index) => (
//           <div
//             key={author.id}
//             className={`flex items-center justify-between px-4  border border-red-800 py-4 transition-colors hover:bg-gray-50 ${
//               index !== authors.length - 1
//                 ? "border-b border-gray-100"
//                 : ""
//             }`}
//           >
//             {/* Left Side */}
//             <div className="flex items-center ">
//               <div className="h-10 w-10 overflow-hidden rounded-full border-[3px] border-orange-400">
//                 <img
//                   src={author.avatar}
//                   alt={author.name}
//                   className="h-full w-full object-cover"
//                 />
//               </div>

//               <div>
//                 <h3 className="text-[13px] font-semibold text-gray-800">
//                   {author.name}
//                 </h3>

//                 <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
//                   <BookOpen size={12} />
//                   <span>{author.booksCount} Books</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side */}
//             <div className="flex items-center gap-1 text-sm text-gray-400">
//               <Users size={14} />
//               <span>{author.borrowersCount} Borrowers</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





import { ChevronDown, BookOpen, Users } from "lucide-react";

interface Author {
  id: number;
  name: string;
  avatar: string;
  booksCount: number;
  borrowersCount: number;
}

const authors: Author[] = [
  {
    id: 1,
    name: "Ava Thornton",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    booksCount: 6,
    borrowersCount: 365,
  },
  {
    id: 2,
    name: "Leo Vance",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    booksCount: 5,
    borrowersCount: 342,
  },
  {
    id: 3,
    name: "Mira Ellison",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    booksCount: 4,
    borrowersCount: 326,
  },
  {
    id: 4,
    name: "Olivia Wilson",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    booksCount: 3,
    borrowersCount: 365,
  },
];

export default function TopAuthors() {
  return (
    <div className="w-full bg-[#f5f6f8]  border border-red-300">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#1f2937]">
          Top Authors
        </h2>

        <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
          This Week
          <ChevronDown size={15} />
        </button>
      </div>

      {/* Authors Card */}
      <div className="overflow-hidden rounded-2xl bg-gray-500 border border-gray-100 gap-3">
        {authors.map((author, index) => (
          <div
            key={author.id}
            className={`flex  flex-col items-center justify-between px-4  border border-red-800 py-4 transition-colors hover:bg-gray-50 ${
              index !== authors.length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
            {/* Left Side */}
            <div className="flex items-center ">

              <div className="flex onetop border border-red-500 items-center gap-3">
                   <div className="h-10 w-10 overflow-hidden rounded-full border-[3px] border-orange-400">
                   <img src={author.avatar} alt={author.name} className="h-full w-full object-cover" />
                   </div>
                  
                    <div>
                    <h3 className="text-[13px] font-semibold text-gray-800">
                     {author.name}
                    </h3>  
                     </div> 

                   </div>
             

               <div className="flex belowTop  border ">

               <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                  <BookOpen size={12} />
                  <span>{author.booksCount} Books</span>
                </div>
            </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <Users size={14} />
              <span>{author.borrowersCount} Borrowers</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





