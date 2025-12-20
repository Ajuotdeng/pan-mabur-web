import React from "react";

const FamilyStats = () => {
  const stats = [
    { label: "Family Members", value: "247", change: "+12" },
    { label: "Media Items", value: "1,842", change: "+45" },
    { label: "Generations", value: "7", change: "" },
    { label: "Locations", value: "38", change: "+3" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Family Statistics</h3>

      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>

            {stat.change && (
              <div className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                {stat.change} this month
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Last updated: Today</span>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            View All Stats →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyStats;
