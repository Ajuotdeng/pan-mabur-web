import React from "react";
import { Link } from "react-router-dom";

export default function MalualMaburMain() {
  const sons = [
    { name: "Mabur Malual", path: "mabur-malual" },
    { name: "Mathiang Malual", path: "mathiang-malual" },
    { name: "Mawut Malual", path: "mawut-malual" },
    { name: "Chol Malual", path: "chol-malual" },
    { name: "Deng Malual", path: "deng-malual" },
    { name: "Magot Malual", path: "magot-malual" },
    { name: "Akoi Malual", path: "akoi-malual" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Descendants of Malual Mabur
        </h1>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Explore the family branches of Malual Mabur below to view their descendants.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {sons.map((son) => (
            <Link
              key={son.name}
              to={`/familytree/malual-mabur/${son.path}`}
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-green-800">
                {son.name}
              </h2>
              <p className="text-gray-500 mt-2 text-sm">View this branch</p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/familytree"
            className="inline-block px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
          >
            ← Back to Mabur Ajuot
          </Link>
        </div>
      </div>
    </div>
  );
}
