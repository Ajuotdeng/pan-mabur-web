import React from "react";
import { Upload, Users, MapPin, BookOpen, Mic, UserPlus } from "lucide-react";

const QuickActions = () => {
  const actions = [
    { icon: <Upload size={24} />, label: "Upload Media", color: "bg-blue-100 text-blue-700" },
    { icon: <Users size={24} />, label: "Add Family Member", color: "bg-green-100 text-green-700" },
    { icon: <MapPin size={24} />, label: "Add Location", color: "bg-purple-100 text-purple-700" },
    { icon: <BookOpen size={24} />, label: "Write Story", color: "bg-orange-100 text-orange-700" },
    { icon: <Mic size={24} />, label: "Record Audio", color: "bg-red-100 text-red-700" },
    { icon: <UserPlus size={24} />, label: "Invite Family", color: "bg-indigo-100 text-indigo-700" }
  ];

  return (
    <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
      <h3 className="mb-4 text-lg font-bold text-gray-900">Quick Actions</h3>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`p-4 rounded-lg ${action.color} hover:opacity-90 transition-opacity flex flex-col items-center justify-center`}
          >
            <span className="mb-2">{action.icon}</span>
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
