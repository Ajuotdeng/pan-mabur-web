import React from "react";
import { Link } from "react-router-dom";

export default function MathiangMaburMain() {
  const sons = [
    { name: "Deng Mathiang", path: "deng-mathiang" },
    { name: "Yar Mathiang", path: "yar-mathiang" },
    { name: "Akol Mathiang", path: "akol-mathiang" },
    { name: "Dau Mathiang", path: "dau-mathiang" },
    { name: "Tong Mathiang", path: "tong-mathiang" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-12 bg-gray-50">
      <div className="max-w-3xl text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold text-green-700 md:text-5xl">
          Descendants of Mathiang Mabur
        </h1>
        <p className="mb-8 font-serif text-sm text-gray-600 md:text-base">
          Explore the family branches of Mathiang Mabur below to view their
          descendants.
        </p>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {sons.map((son) => (
            <Link
              key={son.name}
              to={`/familytree/malual-mabur/${son.path}`}
              className="block p-6 transition-transform transform bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg hover:-translate-y-1"
            >
              <h2 className="font-serif text-xl font-semibold text-green-800">
                {son.name}
              </h2>
              <p className="mt-2 font-serif text-sm text-gray-500">
                View this branch
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/familytree"
            className="inline-block px-4 py-2 font-serif text-white transition-colors bg-green-700 rounded-md hover:bg-green-800"
          >
            ← Back to Mabur Ajuot
          </Link>
        </div>
      </div>
    </div>
  );
}
