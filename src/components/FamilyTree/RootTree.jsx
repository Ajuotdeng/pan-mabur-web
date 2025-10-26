import React from "react";
import { Link } from "react-router-dom";

export default function RootTree() {
  const branches = [
    { name: "Malual Mabur", path: "malual-mabur" },
    { name: "Mathiang Mabur", path: "mathiang-mabur" },
    { name: "Bayak Mabur", path: "bayak-mabur" },
    { name: "Deng Mabur", path: "deng-mabur" },
    { name: "Monykuer Mabur", path: "monykuer-mabur" },
    { name: "Bol Mabur", path: "bol-mabur" },
    { name: "Awandit Mabur", path: "awandit-mabur" },
    { name: "Awan Mabur", path: "awan-mabur" },
    { name: "Ngor Mabur", path: "ngor-mabur" },
    { name: "Akuol Mabur", path: "akuol-mabur" },
    { name: "Nyawei Mabur", path: "nyawei-mabur" },
    { name: "Ruei Mabur", path: "ruei-mabur" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Lineage of Mabur Ajuot
        </h1>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Explore each family branch below to learn about the descendants of Mabur Ajuot.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {branches.map((branch) => (
            <Link
              key={branch.name}
              to={`/familytree/${branch.path}`} 
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-green-800">
                {branch.name}
              </h2>
              <p className="text-gray-500 mt-2 text-sm">View this lineage</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
