// import React from "react";
// import { useFamilyData } from "../../data/FamilyDataContext";

// const TimelineSlider = () => {
//   const { currentYear, setCurrentYear } = useFamilyData();

//   const timelineEvents = [
//     { year: 1956, label: "Independence Movement", color: "bg-red-500" },
//     { year: 1983, label: "Civil War Begins", color: "bg-orange-500" },
//     { year: 2005, label: "Peace Agreement", color: "bg-green-500" },
//     { year: 2011, label: "South Sudan Independence", color: "bg-blue-500" },
//     { year: 2013, label: "Duk Lost Boys Clinic", color: "bg-purple-500" },
//   ];

//   const minYear = 1900;
//   const maxYear = new Date().getFullYear();

//   return (
//     <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl font-bold text-gray-900">Timeline Explorer</h2>
//         <div className="text-2xl font-bold text-blue-600">{currentYear}</div>
//       </div>

//       <div className="mb-8">
//         <input
//           type="range"
//           min={minYear}
//           max={maxYear}
//           value={currentYear}
//           onChange={(e) => setCurrentYear(parseInt(e.target.value, 10))}
//           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
//             [&::-webkit-slider-thumb]:appearance-none
//             [&::-webkit-slider-thumb]:h-6
//             [&::-webkit-slider-thumb]:w-6
//             [&::-webkit-slider-thumb]:rounded-full
//             [&::-webkit-slider-thumb]:bg-blue-600
//             [&::-webkit-slider-thumb]:border-4
//             [&::-webkit-slider-thumb]:border-white
//             [&::-webkit-slider-thumb]:shadow-lg"
//         />
//         <div className="flex justify-between text-sm text-gray-500 mt-2">
//           <span>{minYear}</span>
//           <span>{maxYear}</span>
//         </div>
//       </div>

//       <div className="relative h-24">
//         {timelineEvents.map((event) => {
//           const position =
//             ((event.year - minYear) / (maxYear - minYear)) * 100;
//           const isPast = event.year <= currentYear;

//           return (
//             <div
//               key={event.year}
//               className="absolute cursor-pointer group"
//               style={{ left: `${position}%`, transform: "translateX(-50%)" }}
//               onClick={() => setCurrentYear(event.year)}
//             >
//               <div className="flex flex-col items-center">
//                 <div
//                   className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
//                     isPast ? event.color : "bg-gray-300"
//                   } ${
//                     currentYear === event.year
//                       ? "scale-125 ring-4 ring-blue-200"
//                       : ""
//                   }`}
//                 />
//                 <div className="h-8 w-0.5 bg-gray-200 mt-1" />
//                 <div className="mt-2 text-center">
//                   <div
//                     className={`text-sm font-semibold transition-colors ${
//                       isPast ? "text-gray-900" : "text-gray-400"
//                     }`}
//                   >
//                     {event.year}
//                   </div>
//                   <div
//                     className={`text-xs mt-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${
//                       isPast ? "text-gray-600" : "text-gray-400"
//                     }`}
//                   >
//                     {event.label}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TimelineSlider;
