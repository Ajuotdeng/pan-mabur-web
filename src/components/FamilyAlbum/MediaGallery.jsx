// import { useEffect, useState } from "react";

// const MediaGallery = () => {
//   const [selectedMedia, setSelectedMedia] = useState(null);
//   const [filter, setFilter] = useState("all");

//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") setSelectedMedia(null);
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   const mediaItems = [
//     { id: 1, type: "photo", title: "Traditional Wedding Ceremony", year: "1978", category: "culture" },
//     { id: 2, type: "video", title: "Cattle Migration Journey", year: "1990", category: "lifestyle" },
//     { id: 3, type: "audio", title: "Oral History: Elder Interview", year: "2005", category: "history" },
//     { id: 4, type: "photo", title: "Duk County Landscape", year: "2015", category: "places" },
//     { id: 5, type: "document", title: "Family Tree Document", year: "2020", category: "genealogy" },
//     { id: 6, type: "video", title: "Clinic Opening Ceremony", year: "2013", category: "modern" },
//   ];

//   const filteredItems =
//     filter === "all"
//       ? mediaItems
//       : mediaItems.filter((item) => item.category === filter);

//   return (
//     <>
//       <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
//           <h2 className="text-xl font-bold text-gray-900 mb-4 sm:mb-0">
//             Media Gallery
//           </h2>

//           <div className="flex space-x-2 overflow-x-auto">
//             {["all", "culture", "lifestyle", "history", "places", "genealogy", "modern"].map(
//               (category) => (
//                 <button
//                   key={category}
//                   onClick={() => setFilter(category)}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                     filter === category
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </button>
//               )
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
//               onClick={() => setSelectedMedia(item)}
//             >
//               {/* card content unchanged */}
//               <div className="p-4">
//                 <h3 className="font-semibold">{item.title}</h3>
//                 <span className="text-sm text-gray-600">{item.year}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* MODAL */}
//       {selectedMedia && (
//         <div
//           className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
//           onClick={() => setSelectedMedia(null)}
//         >
//           <div
//             className="bg-white max-w-lg w-full rounded-xl p-6 relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
//               onClick={() => setSelectedMedia(null)}
//             >
//               ✕
//             </button>

//             <h3 className="text-xl font-bold mb-2">{selectedMedia.title}</h3>
//             <p className="text-sm text-gray-600 mb-4">
//               {selectedMedia.year} · {selectedMedia.category}
//             </p>

//             <div className="h-48 bg-gray-100 flex items-center justify-center rounded-lg">
//               <span className="text-gray-500 uppercase">
//                 {selectedMedia.type} preview
//               </span>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MediaGallery;
