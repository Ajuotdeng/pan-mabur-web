// import React, { createContext, useContext, useState } from "react";

// const FamilyDataContext = createContext();

// export const useFamilyData = () => {
//   const context = useContext(FamilyDataContext);
//   if (!context) {
//     throw new Error("useFamilyData must be used within a FamilyDataProvider");
//   }
//   return context;
// };

// export const FamilyDataProvider = ({ children }) => {
//   const [familyData] = useState({
//     locations: [],
//     familyMembers: [],
//     culturalItems: [],
//     timelineEvents: [],
//   });

//   const [currentYear, setCurrentYear] = useState(2011);
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   const value = {
//     familyData,
//     currentYear,
//     setCurrentYear,
//     selectedLocation,
//     setSelectedLocation,
//   };

//   return (
//     <FamilyDataContext.Provider value={value}>
//       {children}
//     </FamilyDataContext.Provider>
//   );
// };
