import React from "react";

const InteractiveMap = () => {
  const locations = [
    { id: 1, name: "Duk County", type: "ancestral", x: 50, y: 40 },
    { id: 2, name: "Bor", type: "migration", x: 60, y: 35 },
    { id: 3, name: "Juba", type: "current", x: 65, y: 30 },
    { id: 4, name: "Khartoum", type: "historical", x: 75, y: 25 }
  ];

  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-visible">
      
      {/* HEADER */}
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Interactive Family Map
          </h2>

          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <Legend color="bg-red-500" label="Ancestral Homes" />
            <Legend color="bg-blue-500" label="Migration Paths" />
          </div>
        </div>
      </div>

      {/* MAP AREA */}
      <div className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[600px]">
        
        {/* SCALABLE SVG MAP */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 to-green-50"
        >
          {/* Migration Path */}
          <path
            d="M50 40 L60 35 L65 30 L75 25"
            stroke="#3b82f6"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
          />

          {/* Locations */}
          {locations.map(loc => (
            <circle
              key={loc.id}
              cx={loc.x}
              cy={loc.y}
              r="2.8"
              className={
                loc.type === "ancestral"
                  ? "fill-red-500"
                  : loc.type === "migration"
                  ? "fill-blue-500"
                  : loc.type === "current"
                  ? "fill-green-500"
                  : "fill-purple-500"
              }
            />
          ))}
        </svg>

        {/* MARKER LABELS */}
        {locations.map(loc => (
          <div
            key={loc.id}
            className="absolute text-xs sm:text-sm font-medium text-gray-800"
            style={{
              left: `${loc.x}%`,
              top: `${loc.y}%`,
              transform: "translate(-50%, -140%)"
            }}
          >
            {loc.name}
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm">
        <span className="text-gray-600">
          Tap markers to explore migration stories
        </span>

        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Full Screen Map
        </button>
      </div>
    </div>
  );
};

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span className={`w-3 h-3 rounded-full ${color}`} />
    <span>{label}</span>
  </div>
);

export default InteractiveMap;
