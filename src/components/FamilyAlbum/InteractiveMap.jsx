import React from "react";

const InteractiveMap = () => {
  const locations = [
    { id: 1, name: "Duk County", type: "ancestral", x: "50%", y: "40%" },
    { id: 2, name: "Bor", type: "migration", x: "60%", y: "35%" },
    { id: 3, name: "Juba", type: "current", x: "65%", y: "30%" },
    { id: 4, name: "Khartoum", type: "historical", x: "75%", y: "25%" }
  ];

  return (
    <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Interactive Family Map</h2>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-3 h-3 mr-2 bg-red-500 rounded-full"></div>
              <span>Ancestral Homes</span>
            </div>

            <div className="flex items-center">
              <div className="w-3 h-3 mr-2 bg-blue-500 rounded-full"></div>
              <span>Migration Paths</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
          </svg>
        </div>

        {locations.map(location => (
          <div
            key={location.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
              location.type === "ancestral"
                ? "text-red-600"
                : location.type === "migration"
                ? "text-blue-600"
                : location.type === "current"
                ? "text-green-600"
                : "text-purple-600"
            }`}
            style={{ left: location.x, top: location.y }}
          >
            <div className="relative group">
              <div
                className={`w-8 h-8 rounded-full border-4 border-white shadow-lg ${
                  location.type === "ancestral"
                    ? "bg-red-500"
                    : location.type === "migration"
                    ? "bg-blue-500"
                    : location.type === "current"
                    ? "bg-green-500"
                    : "bg-purple-500"
                }`}
              ></div>

              <div className="absolute hidden mb-2 transform -translate-x-1/2 bottom-full left-1/2 group-hover:block">
                <div className="px-3 py-1 text-sm text-white bg-gray-900 rounded-lg whitespace-nowrap">
                  {location.name}
                  <div className="absolute w-0 h-0 transform -translate-x-1/2 border-t-4 border-l-4 border-r-4 top-full left-1/2 border-l-transparent border-r-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path
            d="M50,40 L60,35 L65,30 L75,25"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Click on markers to explore family stories</span>

          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            View Full Screen Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
