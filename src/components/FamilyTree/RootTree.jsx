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
    <div className="flex flex-col items-center min-h-screen px-4 py-12 bg-gray-50">
      <div className="max-w-3xl text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold text-green-700 md:text-5xl">
          Lineage of Mabur Ajuot
        </h1>
        <p className="mb-8 font-serif text-sm text-gray-600 md:text-base">
          Explore each family branch below to learn about the descendants of
          Mabur Ajuot.
        </p>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {branches.map((branch) => (
            <Link
              key={branch.name}
              to={`/familytree/${branch.path}`}
              className="block p-6 font-serif transition-transform transform bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg hover:-translate-y-1"
            >
              <h2 className="font-serif text-xl font-semibold text-green-800">
                {branch.name}
              </h2>
              <p className="mt-2 font-serif text-sm text-gray-500">
                View this lineage
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
